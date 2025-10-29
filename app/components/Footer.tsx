export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6 py-12">
        {/* 네비게이션 링크 */}
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          <a href="/service/sunday" className="text-gray-600 hover:text-gray-900 transition-colors">
            금주의 예배와 찬양
          </a>
          <a href="/news/announcements" className="text-gray-600 hover:text-gray-900 transition-colors">
            소식/앨범
          </a>
          <a href="/ministries/about" className="text-gray-600 hover:text-gray-900 transition-colors">
            교회 안내
          </a>
          <a href="/contact/location" className="text-gray-600 hover:text-gray-900 transition-colors">
            오시는길
          </a>
          <a href="/contact/inquiry" className="text-gray-600 hover:text-gray-900 transition-colors">
            온라인 문의
          </a>
          <a href="/login" className="text-gray-600 hover:text-gray-900 transition-colors">
            로그인
          </a>
        </div>

        {/* 구분선 */}
        <div className="border-t border-gray-200 my-8"></div>

        {/* 하단 정보 */}
        <div className="space-y-4 text-sm text-gray-500">
          <p>
            제자들교회  |  담임목사 : 김성훈  |  대표전화 : 02-1234-5678  |  FAX : 02-1234-5679  |  E-MAIL : info@disciples.or.kr
          </p>
          <p>
            주소 : 서울특별시 강남구 테헤란로 123  |  고유번호 : 123-45-67890
          </p>
          <p className="text-gray-400">
            COPYRIGHT © 2025 제자들교회 DISCIPLES CHURCH. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

