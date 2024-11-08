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
          {/* Google Tag Manager Script */}
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MKXCCDQ7');
            `}
          </Script>

          {/* Google Analytics Script */}
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

          {/* Google Tag Manager (noscript) */}
          <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MKXCCDQ7"
              height={0} width={0} style={{ display: "none", visibility: 'hidden'}} ></iframe>
          </noscript>

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
