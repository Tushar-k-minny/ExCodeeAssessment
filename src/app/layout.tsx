import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      <body className={epilogue.className + " overflow-auto "}>
        <nav>
          <NavBar />
        </nav>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
