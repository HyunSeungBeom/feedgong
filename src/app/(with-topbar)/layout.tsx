import type { Metadata } from "next";
import TopBar from "../components/TopBar";
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
      <body>
        <TopBar />
        {children}
      </body>
    </html>
  );
}
