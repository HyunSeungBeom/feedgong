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
          <span className="text-2xl font-bold text-white">피공</span>
          <div className="flex items-center">
            <div>
              <button className="group p-2 transition-all duration-300 ease-in-out">
                <Image src="/menu.svg" alt="menu" width={24} height={24} />
                <div className="absolute top-full right-0 mt-2 w-0 h-0 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 group-hover:w-48 group-hover:h-auto">
                  <div className="p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                    <ul className="space-y-2">
                      <li className="hover:text-blue-500">메뉴 1</li>
                      <li className="hover:text-blue-500">메뉴 2</li>
                      <li className="hover:text-blue-500">메뉴 3</li>
                    </ul>
                  </div>
                </div>
              </button>
            </div>
            <span>로그인</span>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
