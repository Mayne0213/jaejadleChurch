"use client";

import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";

// 회원가입 폼 데이터 타입
interface SignUpFormData {
  userId: string;
  userPassword: string;
  userCheckPassword: string;
  userName: string;
  userPhone: string;
}

// 비밀번호 검증 함수 (영문/숫자 포함 8자 이상)
const validatePassword = (password: string): boolean => {
  const hasLetter = /[A-Za-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const isLongEnough = password.length >= 8;
  return hasLetter && hasNumber && isLongEnough;
};

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    mode: "onChange",
    defaultValues: {
      userId: "",
      userPassword: "",
      userCheckPassword: "",
      userName: "",
      userPhone: "",
    },
  });

  const password = watch("userPassword");

  const onSubmit = async (data: SignUpFormData) => {
    // TODO: 실제 회원가입 로직 구현 (academy 패턴 적용 예정)
    console.log("회원가입:", data);

    // 임시 로딩
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert("회원가입 기능은 추후 구현될 예정입니다.");
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* 아이디 */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            아이디 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            {...register("userId", {
              required: "아이디를 입력해주세요",
              minLength: {
                value: 4,
                message: "아이디는 4자 이상이어야 합니다",
              },
            })}
            disabled={isSubmitting}
            placeholder="아이디를 입력해주세요"
            className={`w-full h-12 px-4 py-3 bg-gray-50 border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent disabled:opacity-50 transition-all ${
              errors.userId
                ? "border-red-300 focus:ring-red-400"
                : "border-gray-200 focus:ring-[#6b95c6]"
            }`}
          />
          {errors.userId && (
            <p className="text-red-500 text-xs mt-1">{errors.userId.message}</p>
          )}
        </div>

        {/* 비밀번호 */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            비밀번호 <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            {...register("userPassword", {
              required: "비밀번호를 입력해주세요",
              validate: {
                validPassword: (value) =>
                  validatePassword(value) ||
                  "영문과 숫자를 포함하여 8자 이상 입력해주세요",
              },
            })}
            disabled={isSubmitting}
            placeholder="영문/숫자 포함 8자 이상"
            className={`w-full h-12 px-4 py-3 bg-gray-50 border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent disabled:opacity-50 transition-all ${
              errors.userPassword
                ? "border-red-300 focus:ring-red-400"
                : "border-gray-200 focus:ring-[#6b95c6]"
            }`}
          />
          {errors.userPassword && (
            <p className="text-red-500 text-xs mt-1">
              {errors.userPassword.message}
            </p>
          )}
        </div>

        {/* 비밀번호 확인 */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            비밀번호 확인 <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            {...register("userCheckPassword", {
              required: "비밀번호를 다시 입력해주세요",
              validate: {
                matchPassword: (value) =>
                  value === password || "비밀번호가 일치하지 않습니다",
              },
            })}
            disabled={isSubmitting}
            placeholder="비밀번호를 다시 입력해주세요"
            className={`w-full h-12 px-4 py-3 bg-gray-50 border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent disabled:opacity-50 transition-all ${
              errors.userCheckPassword
                ? "border-red-300 focus:ring-red-400"
                : "border-gray-200 focus:ring-[#6b95c6]"
            }`}
          />
          {errors.userCheckPassword && (
            <p className="text-red-500 text-xs mt-1">
              {errors.userCheckPassword.message}
            </p>
          )}
        </div>

        {/* 이름 */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            이름 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            {...register("userName", {
              required: "이름을 입력해주세요",
              minLength: {
                value: 2,
                message: "이름은 2자 이상이어야 합니다",
              },
            })}
            disabled={isSubmitting}
            placeholder="이름을 입력해주세요"
            className={`w-full h-12 px-4 py-3 bg-gray-50 border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent disabled:opacity-50 transition-all ${
              errors.userName
                ? "border-red-300 focus:ring-red-400"
                : "border-gray-200 focus:ring-[#6b95c6]"
            }`}
          />
          {errors.userName && (
            <p className="text-red-500 text-xs mt-1">{errors.userName.message}</p>
          )}
        </div>

        {/* 전화번호 */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            전화번호 <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            {...register("userPhone", {
              required: "전화번호를 입력해주세요",
              pattern: {
                value: /^01[0-9]-?[0-9]{3,4}-?[0-9]{4}$/,
                message: "올바른 전화번호 형식이 아닙니다",
              },
            })}
            disabled={isSubmitting}
            placeholder="010-1234-5678"
            className={`w-full h-12 px-4 py-3 bg-gray-50 border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent disabled:opacity-50 transition-all ${
              errors.userPhone
                ? "border-red-300 focus:ring-red-400"
                : "border-gray-200 focus:ring-[#6b95c6]"
            }`}
          />
          {errors.userPhone && (
            <p className="text-red-500 text-xs mt-1">
              {errors.userPhone.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-12 bg-gradient-to-br from-[#7ba5d6] to-[#6b95c6] hover:from-[#6b95c6] hover:to-[#5b85b6] text-white rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center font-semibold mt-6"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
              가입 중...
            </>
          ) : (
            "회원가입"
          )}
        </button>

        {/* 로그인 페이지로 */}
        <div className="text-center text-sm">
          <span className="text-gray-600">이미 계정이 있으신가요? </span>
          <Link
            href="/login"
            className="text-[#6b95c6] hover:text-[#5b85b6] font-semibold hover:underline transition-colors"
          >
            로그인
          </Link>
        </div>

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

export default SignUpForm;

