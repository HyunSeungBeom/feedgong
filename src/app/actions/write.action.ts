"use server";

import { revalidateTag } from "next/cache";

export async function writeAction(_: any, formData: FormData) {
  const content = formData.get("content")?.toString();

  if (!content) {
    return {
      status: false,
      error: "내용을 입력해주세요.",
    };
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/write`,
      {
        method: "POST",
        body: JSON.stringify({ content }),
      }
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    revalidateTag(`write-${content}`); // 검색 결과 캐시 무효화
    return {
      status: true,
      error: "",
    };
  } catch (err) {
    return {
      status: false,
      error: `글 작성에 실패했습니다 : ${err}`,
    };
  }
}
