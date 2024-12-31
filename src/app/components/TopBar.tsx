"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function TopBar() {
  const router = useRouter();

  return (
    <div className="w-full h-16 bg-blue-400 flex justify-between items-center px-4">
      <div>
        <button className="group p-2 transition-all duration-300 ease-in-out">
          <Image src="/menu.svg" alt="menu" width={24} height={24} />
        </button>
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
