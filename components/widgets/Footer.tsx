import Link from "next/link";
import { getNavbarTabs } from "@/lib/tabs";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6 py-12">
        {/* 네비게이션 링크 */}
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {getNavbarTabs().map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {tab.label}
            </Link>
          ))}
          <Link href="/login" className="text-gray-600 hover:text-gray-900 transition-colors">
            로그인
          </Link>
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

