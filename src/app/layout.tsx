import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import StyledJsxRegistry from "../lib/regsitry";
import { GlobalStyle } from "./globalStyle";
import Footer from "@/components/footer/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "N2 operacional - BO",
  description: "Backoffice system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <StyledJsxRegistry>
          {children}
          <Footer />
          <GlobalStyle />
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
