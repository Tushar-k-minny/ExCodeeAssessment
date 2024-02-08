import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar";

const epilogue = Epilogue({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "XeroCodee ",
  description: "XeroCodee Assessment for frontend development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={epilogue.className + " "}>
        <nav><NavBar/></nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
