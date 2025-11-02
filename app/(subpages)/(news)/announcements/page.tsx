"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  getMe,
  getAnnouncements,
  type User,
  type Announcement,
} from "@/lib/services";

export default function AnnouncementsPage() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      // 사용자 인증 확인
      try {
        const userData = await getMe();
        setUser(userData);
      } catch {
        setUser(null);
      }

      // 공지사항 목록 불러오기
      const announcementsData = await getAnnouncements();
      setAnnouncements(announcementsData);
    } catch (error) {
      console.error("Failed to load announcements:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  const isNew = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 7; // 7일 이내는 NEW 표시
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white w-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
      <div className="px-4 space-y-8">
        <div className="max-w-6xl mx-auto">
          {/* 테이블 */}
          {announcements.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 text-center py-20">
              <p className="text-gray-500 text-lg mb-4">
                등록된 공지사항이 없습니다.
              </p>
              {user && (
                <Link
                  href="/announcements/create"
                  className="inline-block px-6 py-3 bg-gradient-to-br from-[#7ba5d6] to-[#6b95c6] text-white rounded-lg hover:shadow-lg transition-all"
                >
                  첫 공지사항 작성하기
                </Link>
              )}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              {/* 테이블 헤더 - 데스크톱 */}
              <div className="hidden md:grid md:grid-cols-12 bg-gray-50 border-b border-gray-200 text-sm font-medium text-gray-700">
                <div className="col-span-1 px-6 py-4 text-center">번호</div>
                <div className="col-span-6 px-6 py-4">제목</div>
                <div className="col-span-2 px-6 py-4 text-center">작성자</div>
                <div className="col-span-2 px-6 py-4 text-center">작성일</div>
                <div className="col-span-1 px-6 py-4 text-center">조회수</div>
              </div>

              {/* 테이블 바디 */}
              <div className="divide-y divide-gray-200">
                {announcements.map((item, index) => (
                  <Link
                    key={item.id}
                    href={`/announcements/${item.id}`}
                    className="grid grid-cols-1 md:grid-cols-12 hover:bg-gray-50 transition-colors"
                  >
                    {/* 모바일 뷰 */}
                    <div className="md:hidden px-6 py-4">
                      <div className="flex items-center gap-2 mb-2">
                        {item.isImportant && (
                          <span className="px-2 py-0.5 bg-orange-100 text-orange-600 text-xs font-bold rounded">
                            필독
                          </span>
                        )}
                        {isNew(item.createdAt) && (
                          <span className="px-2 py-0.5 bg-red-500 text-white text-xs font-bold rounded">
                            N
                          </span>
                        )}
                      </div>
                      <h3 className="font-medium text-gray-900 mb-2">{item.title}</h3>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{item.author.userName}</span>
                        <span>{formatDate(item.createdAt)}</span>
                      </div>
                    </div>

                    {/* 데스크톱 뷰 */}
                    <div className="hidden md:block md:col-span-1 px-6 py-4 text-center text-sm text-gray-600">
                      {announcements.length - index}
                    </div>
                    <div className="hidden md:block md:col-span-6 px-6 py-4">
                      <div className="flex items-center gap-2">
                        {item.isImportant && (
                          <span className="px-2 py-0.5 bg-orange-100 text-orange-600 text-xs font-bold rounded">
                            필독
                          </span>
                        )}
                        <span className="text-gray-900 font-medium hover:text-blue-600 transition-colors">
                          {item.title}
                        </span>
                        {isNew(item.createdAt) && (
                          <span className="px-2 py-0.5 bg-red-500 text-white text-xs font-bold rounded">
                            N
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="hidden md:block md:col-span-2 px-6 py-4 text-center text-sm text-gray-600">
                      {item.author.userName}
                    </div>
                    <div className="hidden md:block md:col-span-2 px-6 py-4 text-center text-sm text-gray-600">
                      {formatDate(item.createdAt)}
                    </div>
                    <div className="hidden md:block md:col-span-1 px-6 py-4 text-center text-sm text-gray-600">
                      {item.viewCount}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-end">
            {user && (
              <Link
                href="/news/announcements/create"
                className="px-6 py-2.5 bg-gradient-to-br from-[#7ba5d6] to-[#6b95c6] hover:from-[#6b95c6] hover:to-[#5b85b6] text-white rounded-lg shadow-md hover:shadow-lg transition-all font-medium text-sm"
              >
                공지 작성
              </Link>
            )}
          </div>
      </div>
  );
}
