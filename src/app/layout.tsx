/* eslint-disable react/react-in-jsx-scope */
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/auth";
import "react-toastify/dist/ReactToastify.css";
import { ToastProvider } from "@/components/ToastProvider/ToastProvider";
import Head from "next/head";
import { Metadata } from "next";
import { ModalProvider } from "@/context/modal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Postify",
  description: "A simple blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <ModalProvider>{children}</ModalProvider>
        </AuthProvider>
        <ToastProvider />
      </body>
    </html>
  );
}
