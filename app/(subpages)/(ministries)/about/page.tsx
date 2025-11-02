import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white w-full">
      <div className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          {/* 인사말 섹션 */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 md:p-12 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">환영합니다</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                제자들교회 홈페이지에 방문해 주신 여러분을 진심으로 환영합니다.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                우리 교회는 예수 그리스도의 사랑을 실천하며, 하나님의 말씀에 순종하는 
                참된 제자를 양성하는 것을 목표로 하고 있습니다. 모든 성도들이 
                말씀 안에서 성장하고, 서로 사랑하며, 세상을 향해 복음을 전하는 
                건강한 공동체가 되기를 소망합니다.
              </p>
              <p className="text-gray-700 leading-relaxed">
                여러분을 사랑으로 초대합니다. 함께 예배하고 교제하며, 
                주님의 제자로서 성장하는 기쁨을 누리시기 바랍니다.
              </p>
              <div className="mt-8 text-right">
                <p className="text-gray-600 font-semibold">담임목사 올림</p>
              </div>
            </div>
          </div>

          {/* 교회 비전 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">우리의 비전</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-blue-500 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4 text-center">📖</div>
                <h3 className="text-xl font-bold text-center text-gray-800 mb-3">말씀 중심</h3>
                <p className="text-gray-600 text-center">
                  성경 말씀을 깊이 있게 배우고 삶으로 실천하는 교회
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-green-500 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4 text-center">❤️</div>
                <h3 className="text-xl font-bold text-center text-gray-800 mb-3">사랑의 실천</h3>
                <p className="text-gray-600 text-center">
                  이웃을 사랑하고 섬기는 그리스도의 사랑을 실천하는 교회
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-purple-500 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4 text-center">🌍</div>
                <h3 className="text-xl font-bold text-center text-gray-800 mb-3">선교와 전도</h3>
                <p className="text-gray-600 text-center">
                  복음을 전하고 세상을 변화시키는 선교적 사명을 감당하는 교회
                </p>
              </div>
            </div>
          </div>

          {/* 핵심 가치 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">핵심 가치</h2>
            <div className="space-y-4">
              {[
                { title: '예배', description: '하나님께 영광을 돌리는 예배를 최우선으로 합니다.' },
                { title: '말씀', description: '성경 말씀을 통해 하나님의 뜻을 배우고 순종합니다.' },
                { title: '기도', description: '기도로 하나님과 깊은 교제를 나눕니다.' },
                { title: '교제', description: '성도 간의 친밀한 교제를 통해 서로를 세웁니다.' },
                { title: '전도', description: '복음을 전하는 것이 우리의 사명임을 기억합니다.' },
                { title: '섬김', description: '겸손히 서로를 섬기며 그리스도의 사랑을 실천합니다.' },
              ].map((value, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 연혁 */}
          <div>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">교회 연혁</h2>
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
              <div className="space-y-6">
                {[
                  { year: '2020', event: '제자들교회 창립' },
                  { year: '2021', event: '주일학교 개설' },
                  { year: '2022', event: '청년부 창립' },
                  { year: '2023', event: '새 성전 건축 착공' },
                  { year: '2024', event: '선교부 창립 및 해외 선교 시작' },
                  { year: '2025', event: '교회 5주년 감사예배' },
                ].map((item, index) => (
                  <div key={index} className="flex gap-6 items-center">
                    <div className="flex-shrink-0 w-20 h-20 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {item.year}
                    </div>
                    <div className="flex-1 p-4 bg-blue-50 rounded-lg">
                      <p className="text-gray-800 font-semibold">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

