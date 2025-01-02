"use server";

import { revalidateTag } from "next/cache";

export async function searchAction(_: any, formData: FormData) {
  const searchText = formData.get("searchText")?.toString();

  if (!searchText) {
    return {
      status: false,
      error: "검색어를 입력해주세요",
    };
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/search`,
      {
        method: "POST",
        body: JSON.stringify({ searchText }),
      }
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    revalidateTag(`search-${searchText}`); // 검색 결과 캐시 무효화
    return {
      status: true,
      error: "",
    };
  } catch (err) {
    return {
      status: false,
      error: `검색에 실패했습니다 : ${err}`,
    };
  }
}
