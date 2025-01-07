"use client";

import { useActionState, useEffect, useState } from "react";
import { searchAction } from "../actions/search.action";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [state, formAction, isPending] = useActionState(searchAction, null);

  useEffect(() => {
    if (state?.status) {
      router.push(`/search?q=${searchTerm}`);
    }

    if (state?.error) {
      alert(state.error);
    }
  }, [state]);

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <form action={formAction} className="flex gap-2">
        <input
          type="text"
          name="searchText"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="검색어를 입력하세요"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {!isPending ? (
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            검색
          </button>
        ) : (
          <button
            className="px-6 py-2 bg-gray-500 text-white rounded-lg transition-colors"
            disabled
          >
            검색중...
          </button>
        )}
      </form>
    </div>
  );
}
