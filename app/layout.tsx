import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
// eslint-disable-next-line camelcase
import { Inter, Space_Grotesk } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";
import { ThemeContextProvider } from "@/constants/ThemeProvider";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "DevFlow",
  description:
    "A community driven platform for asking and answering questions.",
  icons: {
    icon: "/assets/images/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter} ${spaceGrotesk}`}>
        <ClerkProvider
          appearance={{
            elements: {
              formButtonPrimary: "primary-gradient",
              footerActionLink:
                "primary-text-gradient hoover: text-primary-500 ",
            },
          }}
        >
          <ThemeContextProvider>{children}</ThemeContextProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
