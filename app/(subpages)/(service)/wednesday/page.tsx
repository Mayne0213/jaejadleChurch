import React from 'react';

export default function WednesdayServicePage() {
  return (
    <div className="min-h-screen bg-white w-full">
      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* 예배 시간 카드 */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-10 shadow-lg mb-12">
            <h2 className="text-3xl font-bold text-purple-900 mb-6 text-center">수요 저녁 예배</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white rounded-lg p-6 shadow">
                <div className="text-4xl mb-2">⏰</div>
                <p className="font-semibold text-gray-800">시간</p>
                <p className="text-gray-600 mt-1">오후 7:30</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow">
                <div className="text-4xl mb-2">📍</div>
                <p className="font-semibold text-gray-800">장소</p>
                <p className="text-gray-600 mt-1">본당</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow">
                <div className="text-4xl mb-2">👥</div>
                <p className="font-semibold text-gray-800">대상</p>
                <p className="text-gray-600 mt-1">전 성도</p>
              </div>
            </div>
          </div>

          {/* 수요예배 특징 */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">수요예배의 특징</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-lg text-purple-700 mb-3">깊이 있는 성경 공부</h4>
                <p className="text-gray-600">
                  성경을 깊이 있게 공부하며 말씀 안에서 성장하는 시간입니다.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-lg text-purple-700 mb-3">간증과 나눔</h4>
                <p className="text-gray-600">
                  서로의 신앙 경험을 나누며 함께 성장하는 시간입니다.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-lg text-purple-700 mb-3">중보기도</h4>
                <p className="text-gray-600">
                  교회와 성도들, 이웃을 위해 함께 기도하는 시간입니다.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-lg text-purple-700 mb-3">친밀한 교제</h4>
                <p className="text-gray-600">
                  소규모로 진행되어 더 친밀한 교제가 가능합니다.
                </p>
              </div>
            </div>
          </div>

          {/* 안내 */}
          <div className="bg-purple-50 rounded-lg p-8 border-l-4 border-purple-500">
            <h3 className="text-xl font-bold text-purple-900 mb-4">참석 안내</h3>
            <p className="text-gray-700 mb-4">
              주중에 함께 모여 하나님의 말씀을 나누는 귀한 시간입니다. 
              바쁜 일상 가운데서도 하나님을 만나는 시간을 가지시기 바랍니다.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">•</span>
                <span>예배 후 다과 시간이 있습니다.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">•</span>
                <span>처음 오시는 분들을 환영합니다.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

