"use client";

import React, { useState } from "react";
import Link from "next/link";

const LoginForm = () => {
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    
    // TODO: 실제 로그인 로직 구현 (academy 패턴 적용 예정)
    console.log("로그인:", { userId, userPassword });
    
    // 임시 로딩
    setTimeout(() => {
      setIsLoading(false);
      alert("로그인 기능은 추후 구현될 예정입니다.");
    }, 1000);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            아이디
          </label>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
            disabled={isLoading}
            placeholder="아이디를 입력해주세요"
            className="w-full h-12 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6b95c6] focus:border-transparent disabled:opacity-50 transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            비밀번호
          </label>
          <input
            type="password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            required
            disabled={isLoading}
            placeholder="비밀번호를 입력해주세요"
            className="w-full h-12 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6b95c6] focus:border-transparent disabled:opacity-50 transition-all"
          />
        </div>

        <div className="flex items-center justify-between text-sm">
          <Link
            href="/signup"
            className="text-gray-600 hover:text-[#6b95c6] hover:underline transition-colors font-medium"
          >
            회원가입
          </Link>
          <div className="flex items-center space-x-2 text-gray-600">
            <button
              type="button"
              className="hover:underline hover:text-[#6b95c6] transition-colors"
            >
              아이디 찾기
            </button>
            <span className="text-gray-300">|</span>
            <button
              type="button"
              className="hover:underline hover:text-[#6b95c6] transition-colors"
            >
              비밀번호 찾기
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full h-12 bg-gradient-to-br from-[#7ba5d6] to-[#6b95c6] hover:from-[#6b95c6] hover:to-[#5b85b6] text-white rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center font-semibold"
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
              로그인 중...
            </>
          ) : (
            "로그인"
          )}
        </button>

        {/* 홈으로 돌아가기 */}
        <Link
          href="/"
          className="block text-center text-sm text-gray-600 hover:text-[#6b95c6] transition-colors"
        >
          ← 홈으로 돌아가기
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;

