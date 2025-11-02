import React from 'react';

export default function LocationPage() {
  return (
    <div className="min-h-screen bg-white w-full">
      <div className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          {/* 지도 섹션 */}
          <div className="mb-12">
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center shadow-lg overflow-hidden">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-gray-600 text-lg">지도 영역</p>
                <p className="text-sm text-gray-500 mt-2">실제로는 Google Maps나 Kakao Maps API를 연동합니다</p>
              </div>
            </div>
          </div>

          {/* 주소 정보 */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 shadow-md">
              <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                <span>📍</span> 교회 주소
              </h2>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-start gap-2">
                  <span className="font-semibold">주소:</span>
                  <span>서울특별시 강남구 테헤란로 123</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="font-semibold">우편번호:</span>
                  <span>06234</span>
                </p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm">
                  주소 복사하기
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-8 shadow-md">
              <h2 className="text-2xl font-bold text-green-900 mb-6 flex items-center gap-2">
                <span>📞</span> 연락처
              </h2>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-start gap-2">
                  <span className="font-semibold">대표전화:</span>
                  <span>02-1234-5678</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="font-semibold">팩스:</span>
                  <span>02-1234-5679</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="font-semibold">이메일:</span>
                  <span>info@disciples.or.kr</span>
                </p>
              </div>
            </div>
          </div>

          {/* 대중교통 안내 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">대중교통 이용 안내</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-blue-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">🚇</div>
                  <h3 className="text-xl font-bold text-gray-800">지하철</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    <span>2호선 강남역 3번 출구 도보 5분</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    <span>신분당선 강남역 도보 7분</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-green-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">🚌</div>
                  <h3 className="text-xl font-bold text-gray-800">버스</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">•</span>
                    <span>간선: 146, 148, 341, 360</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">•</span>
                    <span>지선: 3412, 4318</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-purple-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">🚗</div>
                  <h3 className="text-xl font-bold text-gray-800">자가용</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500">•</span>
                    <span>지하주차장 이용 가능</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500">•</span>
                    <span>주차 공간 제한적</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 주차 안내 */}
          <div className="bg-yellow-50 rounded-lg p-8 border-l-4 border-yellow-500">
            <h3 className="text-xl font-bold text-yellow-900 mb-4 flex items-center gap-2">
              <span>🅿️</span> 주차 안내
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 mt-1">•</span>
                <span>교회 지하주차장을 이용하실 수 있습니다.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 mt-1">•</span>
                <span>주차 공간이 제한되어 있으니 가급적 대중교통을 이용해 주세요.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 mt-1">•</span>
                <span>주일 예배 시간에는 인근 공영주차장을 이용하실 수 있습니다.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

