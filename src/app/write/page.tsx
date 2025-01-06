"use client";

import { useActionState, useState } from "react";
import { writeAction } from "../actions/write.action";
import Editor from "../components/Editor";
import { useRouter } from "next/navigation";

export default function WritePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [_, formAction, isPending] = useActionState(writeAction, null);
  const router = useRouter();

  const categories = [
    { value: "strategy", label: "공략" },
    { value: "feedbac", label: "피드백" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <form action={formAction} className="space-y-6">
        <h1 className="text-3xl font-bold mb-8">새 글 작성</h1>
        <div className="flex gap-4">
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              카테고리
            </label>
            <select
              id="category"
              name="category"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">카테고리 선택</option>
              {categories.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              제목
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="제목을 입력하세요"
              required
            />
          </div>
        </div>
        <Editor value={content} onChange={setContent} />
        <div className="flex justify-end gap-2">
          <button
            type="button"
            className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition-colors"
            onClick={() => router.push("/")}
          >
            취소
          </button>
          <button
            type="submit"
            disabled={isPending}
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            {isPending ? "작성중..." : "작성완료"}
          </button>
        </div>
      </form>
    </div>
  );
}
