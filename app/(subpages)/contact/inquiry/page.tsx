"use client";

import React, { useState } from 'react';

export default function InquiryPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: '일반문의',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('문의가 접수되었습니다. 빠른 시일 내에 답변 드리겠습니다.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white w-full">
      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* 안내 메시지 */}
          <div className="mb-12 text-center">
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              궁금하신 사항이나 상담을 원하시면 아래 양식을 작성해 주세요. 
              빠른 시일 내에 답변 드리겠습니다.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 연락처 정보 */}
            <div className="md:col-span-1 space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 shadow-md">
                <div className="text-4xl mb-3 text-center">📞</div>
                <h3 className="font-bold text-gray-800 mb-2 text-center">전화 문의</h3>
                <p className="text-gray-700 text-center text-sm">02-1234-5678</p>
                <p className="text-gray-600 text-center text-xs mt-2">평일 09:00 - 18:00</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 shadow-md">
                <div className="text-4xl mb-3 text-center">✉️</div>
                <h3 className="font-bold text-gray-800 mb-2 text-center">이메일</h3>
                <p className="text-gray-700 text-center text-sm">info@disciples.or.kr</p>
                <p className="text-gray-600 text-center text-xs mt-2">24시간 접수 가능</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 shadow-md">
                <div className="text-4xl mb-3 text-center">💬</div>
                <h3 className="font-bold text-gray-800 mb-2 text-center">카카오톡</h3>
                <p className="text-gray-700 text-center text-sm">@제자들교회</p>
                <p className="text-gray-600 text-center text-xs mt-2">실시간 상담</p>
              </div>
            </div>

            {/* 문의 폼 */}
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">온라인 문의</h2>
                
                <div className="space-y-6">
                  {/* 이름 */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      이름 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                      placeholder="이름을 입력하세요"
                    />
                  </div>

                  {/* 연락처 */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      연락처 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                      placeholder="010-1234-5678"
                    />
                  </div>

                  {/* 이메일 */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      이메일
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                      placeholder="email@example.com"
                    />
                  </div>

                  {/* 문의 유형 */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      문의 유형 <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    >
                      <option value="일반문의">일반문의</option>
                      <option value="등록문의">등록문의</option>
                      <option value="예배안내">예배안내</option>
                      <option value="행사문의">행사문의</option>
                      <option value="기타">기타</option>
                    </select>
                  </div>

                  {/* 문의 내용 */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      문의 내용 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                      placeholder="문의하실 내용을 자세히 적어주세요"
                    />
                  </div>

                  {/* 제출 버튼 */}
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-4 rounded-lg hover:bg-blue-600 transition-colors font-bold text-lg shadow-lg"
                  >
                    문의하기
                  </button>
                </div>
              </form>

              {/* 개인정보 처리 안내 */}
              <div className="mt-6 bg-gray-50 rounded-lg p-4 text-sm text-gray-600">
                <p className="mb-2">
                  ※ 수집된 개인정보는 문의 응대 목적으로만 사용되며, 별도 저장하지 않습니다.
                </p>
                <p>
                  ※ 접수된 문의는 1-2일 내로 답변 드립니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

