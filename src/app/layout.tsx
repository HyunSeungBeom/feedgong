import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
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
        <div className="w-full h-16 bg-blue-400 flex justify-between items-center px-4">
          <div>
            <button className="group p-2 transition-all duration-300 ease-in-out">
              <Image src="/menu.svg" alt="menu" width={24} height={24} />
            </button>
          </div>
          <span className="text-2xl font-bold text-white">피공</span>
          <div className="flex gap-4 items-center">
            <span className="text-white text-[12px]">회원가입</span>
            <span className="text-white text-[14px] border border-white rounded-full px-3 py-1">
              로그인
            </span>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
