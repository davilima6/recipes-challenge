import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";

import StyledComponentsRegistry from "@/lib/styledRegistry";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Recipes App",
  description: "Marley Spoon Technical Challenge",
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
