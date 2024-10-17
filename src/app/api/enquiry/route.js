import { google } from 'googleapis';
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

const credentials = {
    client_id: process.env.GOOGLE_CLIENT_ID,
    client_secret: process.env.GOOGLE_CLIENT_SECRET,
    redirect_uris: [process.env.GOOGLE_REDIRECT_URI],
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN
};

const otpStore = new Map();

async function authorize() {
    const { client_secret, client_id, redirect_uris, refresh_token } = credentials;
    const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
    oAuth2Client.setCredentials({ refresh_token });
    return oAuth2Client;
}

const generateOTP = () => Math.floor(1000 + Math.random() * 9000).toString();

const sendEmail = async (data) => {
    // Looking to send emails in production? Check out our Email API/SMTP product!
    var transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "6f6a47019a7afc",
            pass: "808f9815b8eef0"
        }
    });

    // Build the email content dynamically based on defined fields
    let emailContent = `${data?.message || ''}\n\n`;

    if (data?.siteVisitDate) {
        emailContent += `Site Visit Date: ${data.siteVisitDate}\n`;
    }
    if (data?.projectName) {
        emailContent += `Project Name: ${data.projectName}\n`;
    }
    if (data?.name) {
        emailContent += `Name: ${data.name}\n`;
    }
    if (data?.mobile) {
        emailContent += `Contact: ${data.mobile}\n`;
    }
    if (data?.email) {
        emailContent += `Email: ${data.email}\n`;
    }

    const mailOptions = {
        from: data.email,
        to: process.env.EMAIL_USER,
        subject: `New Form Entry for ${data?.event}`,
        text: emailContent,
    };

    await transporter.sendMail(mailOptions);
};

const saveToGoogleSheets = async (data, otpStatus) => {
    try {
        const now = new Date();
        const formattedDate = `${now?.getDate()}/${now?.getMonth() + 1}/${now?.getFullYear()}`;

        const auth = await authorize();
        const sheets = google.sheets({ version: 'v4', auth });

        const newSheetName = 'Sushma Group';

        try {
            await sheets.spreadsheets.batchUpdate({
                spreadsheetId: process.env.SPREADSHEET_ID,
                requestBody: {
                    requests: [
                        {
                            updateSheetProperties: {
                                properties: {
                                    sheetId: 0,
                                    title: newSheetName,
                                },
                                fields: 'title',
                            },
                        },
                    ],
                },
            });
        } catch (error) {
            console.error('Error renaming the sheet:', error.message);
            throw new Error('Failed to rename the sheet. Please check the sheet ID and API credentials.');
        }

        try {
            await sheets.spreadsheets.values.append({
                spreadsheetId: process.env.SPREADSHEET_ID,
                range: `${newSheetName}!A:K`,
                valueInputOption: 'USER_ENTERED',
                requestBody: {
                    values: [
                        [formattedDate, data?.name, data?.email, data?.mobile, data?.message, data?.siteVisitDate, data?.projectName, data?.event, otpStatus],
                    ],
                },
            });
        } catch (error) {
            console.error('Error appending data to the sheet:', error.message);
            throw new Error('Failed to append data to Google Sheets. Please check the spreadsheet ID, credentials, and data.');
        }

    } catch (error) {
        console.error('Error saving data to Google Sheets:', error.message);
        throw new Error('There was an issue saving data to Google Sheets. Please try again later.');
    }
};



export async function POST(request) {
    try {
        const { action, otp, data } = await request.json();
        console.log("action", action)
        console.log("data", data)

        if (action == 'getintouch') {
            if (!data) {
                return NextResponse.json({ error: 'No form data provided' }, { status: 400 });
            }

            await saveToGoogleSheets(data, '-');
            await sendEmail(data);

            return NextResponse.json({ message: 'Data saved and email sent successfully!' });
        } else if (action == 'submitForm') {
            console.log("OK1")
            if (!data) {
                return NextResponse.json({ error: 'No form data provided' }, { status: 400 });
            }
            console.log("GOOGLE1")
            await saveToGoogleSheets(data, 'OTP Not Verified');

            if (!data?.mobile) {
                return NextResponse.json({ error: 'Phone number is required' }, { status: 400 });
            }

            const otpCode = generateOTP();
            otpStore.set(data?.mobile, otpCode);

            // Send OTP via SMS (using any SMS API service like TextLocal)
            const apiKey = process.env.TEXTLOCALKEY;
            const address = process.env.TEXTLOCALURL;
            const sender = process.env.TEXTLOCALSENDERID;
            const message = encodeURIComponent(`Hello User Your Login Verification Code is ${otpCode}. Thanks AYT`);
            const url = `${address}?apikey=${apiKey}&numbers=${data?.mobile}&message=${message}&sender=${sender}`;

            const response = await fetch(url, { method: 'POST' });
            const smsdata = await response.json();

            console.log('smsdata', smsdata)
            if (smsdata.status === 'success') {
                // Clear OTP after 5 minutes
                setTimeout(() => otpStore.delete(data?.mobile), 300000); // 5 minutes
                return NextResponse.json({ message: 'OTP sent successfully!' });
            } else {
                return NextResponse.json({ error: 'Failed to send OTP' }, { status: 400 });
            }
        } else if (action == 'verifyOTP') {
            if (!data?.mobile || !data?.otp) {
                return NextResponse.json({ error: 'Phone number and OTP are required' }, { status: 400 });
            }
            const storedOtp = otpStore.get(data?.mobile);
            console.log('storedOtp', storedOtp)
            console.log('data?.otp', data?.otp)

            if (storedOtp === data?.otp) {
                otpStore.delete(data?.mobile); // OTP verified, delete from store
                // Send email now that OTP is verified
                await saveToGoogleSheets(data, 'OTP Verified');

                if (data) {
                    await sendEmail(data);
                    return NextResponse.json({ message: 'OTP verified and email sent!' });
                } else {
                    return NextResponse.json({ error: 'No form data available for email' }, { status: 400 });
                }
            } else {
                return NextResponse.json({ error: 'Invalid OTP' }, { status: 401 });
            }
        } else if (action === 'resendOTP') {
            // Resend OTP action
            if (!data?.mobile) {
                return NextResponse.json({ error: 'Phone number is required' }, { status: 400 });
            }

            const otpCode = generateOTP();
            otpStore.set(data?.mobile, otpCode);

            // Send new OTP via SMS
            const apiKey = process.env.TEXTLOCALKEY;
            const address = process.env.TEXTLOCALURL;
            const sender = process.env.TEXTLOCALSENDERID;
            const message = encodeURIComponent(`Hello User Your Login Verification Code is ${otpCode}. Thanks AYT`);
            const url = `${address}?apikey=${apiKey}&numbers=${data?.mobile}&message=${message}&sender=${sender}`;

            const response = await fetch(url, { method: 'POST' });
            const smsdata = await response.json();

            if (smsdata.status === 'success') {
                setTimeout(() => otpStore.delete(data?.mobile), 300000); // 5 minutes
                return NextResponse.json({ message: 'New OTP sent successfully!' });
            } else {
                return NextResponse.json({ error: 'Failed to resend OTP' }, { status: 400 });
            }
        } else {
            return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
        }
    } catch (error) {
        console.error('Error processing request:', error);
        return NextResponse.json({ error: 'Server error', error }, { status: 500 });
    }
}
