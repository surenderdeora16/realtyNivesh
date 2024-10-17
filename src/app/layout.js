import { FixedSectionProvider } from "@/app/context/FixedSectionContext"; // Adjust the path as needed
import 'swiper/css';
import "./globals.css";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "Realty Nivesh",
  description: "Discover Sushma Group's premium commercial and residential properties in Zirakpur, including luxury leisure homes designed for modern living and relaxation.",
  keywords: "real estate in zirakpur, sushma group, sushma service partner "
};

export default function RootLayout({ children }) {
  return (
    <FixedSectionProvider>
      <html lang="en">
        <body>
          <div className="relative z-[999999999999999]">
            <ToastContainer />
          </div>
          {children}
        </body>
      </html>
    </FixedSectionProvider>
  );
}
