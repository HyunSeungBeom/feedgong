export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-24 ">
      <div className="w-full max-w-4xl">
        <div className="bg-white rounded-lg shadow-md">
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">게시글 목록</h2>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  글쓰기
                </button>
              </div>
            </div>
          </div>
          <div className="divide-y">
            <div className="p-4 hover:bg-gray-50 cursor-pointer">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">피드백 부탁드립니다</h3>
                <span className="text-sm text-gray-500">2024-01-20</span>
              </div>
              <p className="text-gray-600 mt-1">
                안녕하세요, 피드백 부탁드립니다...
              </p>
              <div className="flex gap-2 mt-2">
                <span className="text-sm text-gray-500">작성자: 홍길동</span>
                <span className="text-sm text-gray-500">조회수: 42</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
