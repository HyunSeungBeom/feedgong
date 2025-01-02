export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">피공</h3>
            <p className="text-gray-400">
              게임 피드백과 공략을 공유하는 커뮤니티
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">바로가기</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white">
                  홈
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white">
                  소개
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-400 hover:text-white">
                  이용약관
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">문의</h3>
            <p className="text-gray-400">
              이메일: contact@pigong.com
              <br />
              전화: 02-123-4567
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 피공. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
