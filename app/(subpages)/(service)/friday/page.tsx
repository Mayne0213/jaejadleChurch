import React from 'react';

export default function FridayServicePage() {
  return (
    <div className="min-h-screen bg-white w-full">
      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* 예배 시간 카드 */}
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-10 shadow-lg mb-12">
            <h2 className="text-3xl font-bold text-indigo-900 mb-6 text-center">금요 철야 기도회</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white rounded-lg p-6 shadow">
                <div className="text-4xl mb-2">⏰</div>
                <p className="font-semibold text-gray-800">시간</p>
                <p className="text-gray-600 mt-1">오후 10:00</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow">
                <div className="text-4xl mb-2">📍</div>
                <p className="font-semibold text-gray-800">장소</p>
                <p className="text-gray-600 mt-1">본당</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow">
                <div className="text-4xl mb-2">🙏</div>
                <p className="font-semibold text-gray-800">형태</p>
                <p className="text-gray-600 mt-1">철야 기도</p>
              </div>
            </div>
          </div>

          {/* 기도회 프로그램 */}
          <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200 mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">기도회 프로그램</h3>
            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 bg-indigo-500 text-white px-4 py-2 rounded-lg font-bold">
                  22:00
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">시작 예배</h4>
                  <p className="text-gray-600">찬양과 말씀으로 기도회를 시작합니다.</p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 bg-indigo-500 text-white px-4 py-2 rounded-lg font-bold">
                  23:00
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">중보기도</h4>
                  <p className="text-gray-600">교회와 나라, 성도들을 위해 기도합니다.</p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 bg-indigo-500 text-white px-4 py-2 rounded-lg font-bold">
                  00:00
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">개인 기도</h4>
                  <p className="text-gray-600">각자의 기도 제목을 가지고 기도하는 시간입니다.</p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 bg-indigo-500 text-white px-4 py-2 rounded-lg font-bold">
                  03:00
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">새벽 예배</h4>
                  <p className="text-gray-600">새벽을 깨우는 예배로 기도회를 마무리합니다.</p>
                </div>
              </div>
            </div>
          </div>

          {/* 참여 안내 */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-indigo-50 rounded-lg p-6 border-l-4 border-indigo-500">
              <h3 className="text-xl font-bold text-indigo-900 mb-4">기도 제목</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>교회와 목회자를 위한 기도</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>성도들의 신앙 성장을 위한 기도</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>복음 전파를 위한 기도</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>나라와 민족을 위한 기도</span>
                </li>
              </ul>
            </div>

            <div className="bg-indigo-50 rounded-lg p-6 border-l-4 border-indigo-500">
              <h3 className="text-xl font-bold text-indigo-900 mb-4">참석 안내</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>부담 없이 가능한 시간에 참석하시면 됩니다.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>간단한 다과가 준비되어 있습니다.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>개인 기도 제목을 준비해 오세요.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

