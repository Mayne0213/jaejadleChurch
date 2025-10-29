"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import tabs from "@/app/lib/subNavbarTabs";
import GetTabsValue from "@/app/lib/subNavbarTabsUtils";

const SubNavbar: React.FC = () => {
  const pathname = usePathname();

  const currentTab = tabs.find(
    (tab) => GetTabsValue("Title", pathname) === tab.label,
  );

  const imageSrc = GetTabsValue("Image", pathname);

  return (
    <div>
      {/* 이미지 안 (Navbar 제외) */}
      <div className="relative w-full h-[200px] md:h-[300px] lg:h-[500px] bg-gradient-to-r from-blue-600 to-blue-800">
        {/* 백그라운드 이미지 */}
        {imageSrc && typeof imageSrc === 'string' && (
          <Image
            src={imageSrc}
            alt="Banner Image"
            fill
            style={{ objectFit: "cover" }}
          />
        )}
        
        {/* 검은색 오버레이 */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* 이미지 한가운데 제목 */}
        <div
          className="font-bold flex items-center justify-center absolute inset-0 text-white text-4xl md:text-6xl lg:text-7xl"
        >
          {GetTabsValue("Title", pathname) as string}
        </div>

        {/* 이미지 안쪽 중 가장 아래에 있는 탭 바 */}
        {currentTab && currentTab.submenu.length > 1 && (
          <div
            className="backdrop-blur-sm absolute bottom-0 left-0 right-0 items-center justify-center hidden md:flex"
          >
            {currentTab.submenu.map(
              (item: { href: string; label: string }, subIndex: number) => (
                <Link key={subIndex} href={item.href}>
                  <div
                    className={`px-10 lg:px-20 py-4 text-base lg:text-xl font-semibold transition-all duration-300
                    ${item.href === pathname ? "text-gray-700 bg-white" : "text-white hover:bg-gray-50 hover:bg-opacity-10 hover:text-gray-700"}`}
                  >
                    {item.label}
                  </div>
                </Link>
              ),
            )}
          </div>
        )}
      </div>

      {/* 이미지 밖 */}
      <div
        className="font-semibold text-center px-4 md:px-8 lg:px-12 mt-6 md:mt-10 lg:mt-12"
      >
        {/* 영어 제목 */}
        <div className="text-blue-500 text-sm md:text-base lg:text-lg mb-2">
          {GetTabsValue("SubTitleEnglish", pathname) as string}
        </div>

        {/* 한글 제목 */}
        <div className="text-2xl md:text-4xl lg:text-5xl mb-4 md:mb-6">
          {GetTabsValue("SubTitle", pathname) as string}
        </div>

        {/* 탭 설명 */}
        <div
          className="font-light whitespace-pre-line text-xs md:text-sm lg:text-base mt-4 md:mt-6"
        >
          {GetTabsValue("Description", pathname) as string}
        </div>
      </div>
    </div>
  );
};

export default SubNavbar;

