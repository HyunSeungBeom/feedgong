import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "피공",
  description: "피드백, 공략을 원할땐! 피공!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
