import React from 'react';

export default function SundayServicePage() {
  return (
    <div className="min-h-screen bg-white w-full">
      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* 예배 시간 카드 */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 shadow-md">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">1부 예배</h2>
              <div className="space-y-2 text-gray-700">
                <p className="flex items-center gap-2">
                  <span className="font-semibold">시간:</span> 오전 9:00
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-semibold">장소:</span> 본당
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-semibold">대상:</span> 전 성도
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 shadow-md">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">2부 예배</h2>
              <div className="space-y-2 text-gray-700">
                <p className="flex items-center gap-2">
                  <span className="font-semibold">시간:</span> 오전 11:00
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-semibold">장소:</span> 본당
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-semibold">대상:</span> 전 성도
                </p>
              </div>
            </div>
          </div>

          {/* 예배 순서 */}
          <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200 mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">예배 순서</h3>
            <div className="space-y-4">
              {[
                { order: '전주', description: '경건한 마음으로 예배를 준비합니다' },
                { order: '찬송', description: '찬양으로 하나님께 영광을 돌립니다' },
                { order: '기도', description: '대표 기도' },
                { order: '성경봉독', description: '말씀을 듣습니다' },
                { order: '찬양', description: '찬양대 특송' },
                { order: '설교', description: '말씀을 전합니다' },
                { order: '헌금', description: '감사의 헌금을 드립니다' },
                { order: '광고', description: '교회 소식을 전합니다' },
                { order: '축도', description: '하나님의 축복을 받습니다' },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{item.order}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 안내 사항 */}
          <div className="bg-blue-50 rounded-lg p-8 border-l-4 border-blue-500">
            <h3 className="text-xl font-bold text-blue-900 mb-4">안내 사항</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>예배 시작 10분 전까지 입장해 주시기 바랍니다.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>예배 중에는 휴대폰을 무음으로 설정해 주세요.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>주차 공간이 제한되어 있으니 대중교통을 이용해 주세요.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

