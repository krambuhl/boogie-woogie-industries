import type { Metadata } from "next";

import "./styles/globals.css";
import "./styles/tokens.css";

export const metadata: Metadata = {
  title: "Boogie Woogie Industrial Complex",
  description: "Boogie Woogie Industrial Complex",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
