import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bradford Dental Care",
  description: "Your family's smile is our priority",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
