import type { Metadata } from "next";
import TopBar from "../components/TopBar";
import Chat from "@/app/components/Chat";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
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
        <div className="flex">
          <div className="flex-1 mt-10">
            <SearchBar />
            {children}
          </div>
          <div className="w-80">
            <Chat />
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
