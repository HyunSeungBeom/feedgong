"use client";

import { useMemo, useRef } from "react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";
const ReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,
  loading: () => <p>로딩중...</p>,
});

interface EditorProps {
  value: any;
  onChange: (value: string) => void;
}

export default function Editor({ value, onChange }: EditorProps) {
  const quillRef = useRef<any>(null);

  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files?.[0];
      if (file) {
        try {
          // 여기에 이미지 업로드 로직 구현
          // const url = await uploadImage(file);
          const url = "이미지_URL";

          const quill = quillRef.current?.getEditor();
          const range = quill?.getSelection(true);
          quill?.insertEmbed(range?.index, "image", url);
        } catch (error) {
          console.error("이미지 업로드 실패:", error);
        }
      }
    };
  };

  const videoHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "video/*");
    input.click();

    input.onchange = async () => {
      const file = input.files?.[0];
      if (file) {
        try {
          // 여기에 비디오 업로드 로직 구현
          // const url = await uploadVideo(file);
          const url = "비디오_URL";

          const quill = quillRef.current.getEditor();
          const range = quill.getSelection(true);
          quill.insertEmbed(range.index, "video", url);
        } catch (error) {
          console.error("비디오 업로드 실패:", error);
        }
      }
    };
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ color: [] }, { background: [] }],
          [{ align: [] }],
          ["image", "video"],
          ["clean"],
        ],
        handlers: {
          image: imageHandler,
          video: videoHandler,
        },
      },
    }),
    []
  );

  return (
    <div className="h-[600px]">
      <ReactQuill
        value={value}
        onChange={onChange}
        modules={modules}
        theme="snow"
        placeholder="내용을 입력하세요..."
        className="h-[550px]"
      />
    </div>
  );
}
