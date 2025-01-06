"use client";

import { useMemo, useRef } from "react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,
  loading: () => <p>로딩중...</p>,
});

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function Editor({ value, onChange }: EditorProps) {
  const quillRef = useRef<any>(null);

  const handleImageUpload = () => {
    const input = createFileInput("image/*");
    input.onchange = async () => {
      const file = input.files?.[0];
      if (file) {
        // TODO: 이미지 업로드 로직 구현
        console.log("업로드할 이미지:", file);
      }
    };
    input.click();
  };

  const handleVideoUpload = () => {
    showVideoUploadModal();
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
          image: handleImageUpload,
          video: handleVideoUpload,
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

function createFileInput(accept: string) {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = accept;
  return input;
}

function showVideoUploadModal() {
  const modal = document.createElement("div");
  modal.className =
    "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center";

  const modalContent = createModalContent();
  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  setupModalEventListeners(modal, modalContent);
}

function createModalContent() {
  const modalContent = document.createElement("div");
  modalContent.className = "bg-white p-6 rounded-lg w-96 relative";
  modalContent.innerHTML = `
    <button class="absolute top-2 right-2 text-gray-500 hover:text-gray-700" id="close-btn">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
    <div class="flex flex-col items-center justify-center h-48 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition-colors" id="dropzone">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
      <p class="text-gray-500">동영상 추가</p>
      <p class="text-sm text-gray-400 mt-1">또는 파일을 여기에 드래그하세요</p>
    </div>
  `;
  return modalContent;
}

function setupModalEventListeners(
  modal: HTMLElement,
  modalContent: HTMLElement
) {
  const closeBtn = modalContent.querySelector("#close-btn");
  const dropzone = modalContent.querySelector("#dropzone");

  closeBtn?.addEventListener("click", () => {
    document.body.removeChild(modal);
  });

  if (dropzone) {
    setupDropzoneEventListeners(dropzone, modal);
  }
}

function setupDropzoneEventListeners(dropzone: Element, modal: HTMLElement) {
  dropzone.addEventListener("click", () => {
    const input = createFileInput("video/*");
    input.onchange = async () => {
      const file = input.files?.[0];
      if (file) {
        // TODO: 비디오 업로드 로직 구현
        console.log("업로드할 비디오:", file);
        document.body.removeChild(modal);
      }
    };
    input.click();
  });

  dropzone.addEventListener("dragover", (e) => {
    e.preventDefault();
    (dropzone as HTMLElement).classList.add("border-blue-500");
  });

  dropzone.addEventListener("dragleave", () => {
    (dropzone as HTMLElement).classList.remove("border-blue-500");
  });

  dropzone.addEventListener("drop", (e) => {
    e.preventDefault();
    (dropzone as HTMLElement).classList.remove("border-blue-500");
  });
}
