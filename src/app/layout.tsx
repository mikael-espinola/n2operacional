import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import StyledJsxRegistry from "../lib/regsitry";
import { GlobalStyle } from "./globalStyle";
import Footer from "@/components/footer/Footer";
import UserProvider from "@/context/UserProvider";
import FilterProvider from "@/context/filterProvider";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "N2 operacional - BO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <StyledJsxRegistry>
          <FilterProvider>
            <UserProvider>
              {children}
              <Footer />
              <GlobalStyle />
            </UserProvider>
          </FilterProvider>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
