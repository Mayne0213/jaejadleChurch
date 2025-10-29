"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // 로그인/회원가입 페이지인지 확인
  const isAuthPage = pathname === "/login" || pathname === "/signup";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 로그인/회원가입 페이지 또는 모바일 메뉴가 열렸을 때 항상 스크롤된 상태로 표시
  const shouldShowScrolled = isAuthPage || isScrolled || isMenuOpen;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        shouldShowScrolled 
          ? "bg-white shadow-md" 
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6">
        <div className="flex justify-between items-center h-[90px]">
          {/* 로고 */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src={shouldShowScrolled ? "/icon_black.png" : "/icon_white.png"}
                alt="제자들교회 로고"
                width={50}
                height={50}
                className="transition-opacity duration-300"
              />
              <div className={shouldShowScrolled ? "text-black" : "text-white"}>
                <div className="text-2xl font-bold tracking-wide">제자들교회</div>
                <div className="text-xs opacity-90">DISCIPLES CHURCH</div>
              </div>
            </Link>
          </div>

          {/* 데스크톱 네비게이션 */}
          <div className="hidden lg:flex items-center space-x-10">
            <Link href="/service/sunday" className={`${shouldShowScrolled ? "text-black/90 hover:text-black" : "text-white/90 hover:text-white"} font-medium transition-colors`}>
              금주의 예배와 찬양
            </Link>
            <Link href="/news/announcements" className={`${shouldShowScrolled ? "text-black/90 hover:text-black" : "text-white/90 hover:text-white"} font-medium transition-colors`}>
              소식/앨범
            </Link>
            <Link href="/ministries/about" className={`${shouldShowScrolled ? "text-black/90 hover:text-black" : "text-white/90 hover:text-white"} font-medium transition-colors`}>
              안내
            </Link>
            <Link href="/contact/location" className={`${shouldShowScrolled ? "text-black/90 hover:text-black" : "text-white/90 hover:text-white"} font-medium transition-colors`}>
              오시는길
            </Link>
            <Link 
              href="/login" 
              className={`px-5 py-2 rounded-lg font-semibold transition-all ${
                shouldShowScrolled 
                  ? "bg-gradient-to-br from-[#7ba5d6] to-[#6b95c6] text-white hover:shadow-lg" 
                  : "bg-white/90 text-[#6b95c6] hover:bg-white"
              }`}
            >
              로그인
            </Link>
          </div>

          {/* 햄버거 메뉴 */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${shouldShowScrolled ? "text-black" : "text-white"} p-2`}
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className="lg:hidden pb-6 space-y-1">
            <Link href="/service/sunday" className={`block py-3 ${shouldShowScrolled ? "text-black/90 hover:text-black" : "text-white/90 hover:text-white"}`} onClick={() => setIsMenuOpen(false)}>
              금주의 예배와 찬양
            </Link>
            <Link href="/news/announcements" className={`block py-3 ${shouldShowScrolled ? "text-black/90 hover:text-black" : "text-white/90 hover:text-white"}`} onClick={() => setIsMenuOpen(false)}>
              소식/앨범
            </Link>
            <Link href="/ministries/about" className={`block py-3 ${shouldShowScrolled ? "text-black/90 hover:text-black" : "text-white/90 hover:text-white"}`} onClick={() => setIsMenuOpen(false)}>
              안내
            </Link>
            <Link href="/contact/location" className={`block py-3 ${shouldShowScrolled ? "text-black/90 hover:text-black" : "text-white/90 hover:text-white"}`} onClick={() => setIsMenuOpen(false)}>
              오시는길
            </Link>
            <Link 
              href="/login" 
              className={`block py-3 px-4 mt-4 rounded-lg text-center font-semibold ${
                shouldShowScrolled 
                  ? "bg-gradient-to-br from-[#7ba5d6] to-[#6b95c6] text-white" 
                  : "bg-white/90 text-[#6b95c6]"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              로그인
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

