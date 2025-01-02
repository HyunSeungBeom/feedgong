"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function TopBar() {
  const router = useRouter();

  return (
    <div className="w-full h-16 bg-blue-400 flex justify-between items-center px-4">
      <div className="relative">
        <div className="relative group">
          <button className="p-2 transition-all duration-300 ease-in-out">
            <Image src="/menu.svg" alt="menu" width={24} height={24} />
          </button>
          <div className="absolute hidden group-hover:block top-full left-0 w-48 bg-white rounded-lg shadow-lg">
            <div className="p-2">
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700">
                게임 연동
              </button>
            </div>
          </div>
        </div>
      </div>
      <span className="text-2xl font-bold text-white">피공</span>
      <div className="flex gap-4 items-center">
        <span className="text-white text-[12px]">회원가입</span>
        <span
          className="text-white text-[14px] border border-white rounded-full px-3 py-1 cursor-pointer"
          onClick={() => router.push("/login")}
        >
          로그인
        </span>
      </div>
    </div>
  );
}
