import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { AuthProvider } from "@/context/AuthContext";

export const metadata: Metadata = {
  title: "EcoCircuit | Recycle Reuse Earn...",
  description: "EcoCircuit",
  generator: "EcoCircuit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>
          EcoCircuit - 
        </title>
      </head>
      <body>
        <AuthProvider>

        <Navbar />
        {children}
        </AuthProvider>
      </body>
    </html>
  );
}
