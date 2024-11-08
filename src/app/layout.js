import { FixedSectionProvider } from "@/app/context/FixedSectionContext"; // Adjust the path as needed
import Script from "next/script";
import 'swiper/css';
import "./globals.css";
import { ToastContainer } from "react-toastify";
import LeaveConfirmation from "@/components/LeaveConfirmation";

export const metadata = {
  title: "Realty Nivesh",
  description: "Discover Sushma Group's premium commercial and residential properties in Zirakpur, including luxury leisure homes designed for modern living and relaxation.",
  keywords: "real estate in zirakpur, sushma group, sushma service partner "
};

export default function RootLayout({ children }) {
  return (
    <FixedSectionProvider>
      <html lang="en">
        <head>
          <Script async src="https://www.googletagmanager.com/gtag/js?id=G-FP6ZHX1P2N" strategy="afterInteractive" />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FP6ZHX1P2N');
            `}
          </Script>
        </head>
        <body>
          <LeaveConfirmation />
          <div className="relative z-[999999999999999]">
            <ToastContainer />
          </div>
          {children}
        </body>
      </html>
    </FixedSectionProvider>
  );
}
