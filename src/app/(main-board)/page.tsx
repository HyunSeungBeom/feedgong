"use client";

import { useRouter } from "next/navigation";
import { postList } from "../__MOCK__";
export default function Home() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center px-24">
      <div className="w-full max-w-4xl">
        <div className="bg-white rounded-lg shadow-md">
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">게시글 목록</h2>
                <button
                  onClick={() => router.push("/write")}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  글쓰기
                </button>
              </div>
            </div>
          </div>
          <div className="divide-y">
            {postList.map((post) => (
              <div
                key={post.id}
                className="p-4 hover:bg-gray-50 cursor-pointer"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">{post.title}</h3>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <p className="text-gray-600 mt-1">{post.content}</p>
                <div className="flex gap-2 mt-2">
                  <span className="text-sm text-gray-500">
                    작성자: {post.author}
                  </span>
                  <span className="text-sm text-gray-500">
                    조회수: {post.views}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center p-4 border-t">
            <div className="flex gap-2">
              <button className="px-3 py-1 border rounded hover:bg-gray-100">
                이전
              </button>
              <button className="px-3 py-1 border rounded bg-blue-500 text-white">
                1
              </button>
              <button className="px-3 py-1 border rounded hover:bg-gray-100">
                2
              </button>
              <button className="px-3 py-1 border rounded hover:bg-gray-100">
                3
              </button>
              <button className="px-3 py-1 border rounded hover:bg-gray-100">
                4
              </button>
              <button className="px-3 py-1 border rounded hover:bg-gray-100">
                5
              </button>
              <button className="px-3 py-1 border rounded hover:bg-gray-100">
                다음
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
