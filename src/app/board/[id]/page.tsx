"use client";

import { useParams, useRouter } from "next/navigation";
import { postList } from "../../__MOCK__";

export default function BoardDetailPage() {
  const router = useRouter();
  const { id } = useParams();
  const post = postList.find((post) => post.id === Number(id));

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-gray-900">
            존재하지 않는 게시물입니다.
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <article className="space-y-6">
        <header className="border-b pb-6">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <div className="flex justify-between text-gray-600">
            <div className="flex gap-4">
              <span>작성자: {post.author}</span>
              <span>조회수: {post.views}</span>
            </div>
            <time>{post.date}</time>
          </div>
        </header>

        <div className="py-6 min-h-[200px]">
          <p className="text-gray-800 whitespace-pre-wrap">{post.content}</p>
        </div>

        <div className="flex justify-end gap-2 pt-6 border-t">
          <button
            type="button"
            className="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
          >
            수정
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            삭제
          </button>
        </div>
      </article>
    </div>
  );
}
