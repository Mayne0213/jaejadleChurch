import React from 'react';

export default function DepartmentsPage() {
  const departments = [
    {
      name: '영아부',
      age: '0-3세',
      color: 'pink',
      icon: '👶',
      description: '영아들의 신앙의 첫 걸음을 돕습니다.',
      time: '주일 오전 11:00',
      location: '영아부실',
    },
    {
      name: '유치부',
      age: '4-7세',
      color: 'yellow',
      icon: '🧒',
      description: '하나님의 사랑을 느끼고 배웁니다.',
      time: '주일 오전 11:00',
      location: '유치부실',
    },
    {
      name: '유년부',
      age: '초등 1-3학년',
      color: 'green',
      icon: '👧',
      description: '성경 이야기를 통해 신앙의 기초를 다집니다.',
      time: '주일 오전 11:00',
      location: '유년부실',
    },
    {
      name: '소년부',
      age: '초등 4-6학년',
      color: 'blue',
      icon: '👦',
      description: '하나님 말씀을 배우고 실천합니다.',
      time: '주일 오전 11:00',
      location: '소년부실',
    },
    {
      name: '중등부',
      age: '중학생',
      color: 'indigo',
      icon: '🧑',
      description: '청소년기의 신앙 정체성을 확립합니다.',
      time: '주일 오전 11:00',
      location: '중등부실',
    },
    {
      name: '고등부',
      age: '고등학생',
      color: 'purple',
      icon: '👨',
      description: '세상을 향한 신앙의 비전을 키웁니다.',
      time: '주일 오전 11:00',
      location: '고등부실',
    },
    {
      name: '청년부',
      age: '대학생-미혼',
      color: 'red',
      icon: '🙋',
      description: '젊음으로 하나님을 섬기는 청년들의 공동체입니다.',
      time: '주일 오후 2:00',
      location: '청년부실',
    },
    {
      name: '장년부',
      age: '기혼 성인',
      color: 'slate',
      icon: '👨‍👩‍👧‍👦',
      description: '가정과 교회를 세우는 장년들의 모임입니다.',
      time: '주일 오전 9:00 / 11:00',
      location: '본당',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: string } = {
      pink: 'from-pink-100 to-pink-200 border-pink-500',
      yellow: 'from-yellow-100 to-yellow-200 border-yellow-500',
      green: 'from-green-100 to-green-200 border-green-500',
      blue: 'from-blue-100 to-blue-200 border-blue-500',
      indigo: 'from-indigo-100 to-indigo-200 border-indigo-500',
      purple: 'from-purple-100 to-purple-200 border-purple-500',
      red: 'from-red-100 to-red-200 border-red-500',
      slate: 'from-slate-100 to-slate-200 border-slate-500',
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-white w-full">
      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* 부서 소개 */}
          <div className="mb-12 text-center">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              연령별로 맞춤형 신앙 교육과 프로그램을 제공하며, 
              각 세대가 하나님의 말씀 안에서 성장할 수 있도록 돕습니다.
            </p>
          </div>

          {/* 부서 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${getColorClasses(dept.color)} rounded-lg p-6 shadow-md hover:shadow-xl transition-all hover:scale-105 border-l-4`}
              >
                <div className="text-5xl mb-4 text-center">{dept.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 text-center mb-2">
                  {dept.name}
                </h3>
                <p className="text-center text-gray-600 text-sm font-semibold mb-4">
                  {dept.age}
                </p>
                <p className="text-gray-700 text-center text-sm mb-4">
                  {dept.description}
                </p>
                <div className="border-t pt-4 space-y-2 text-sm text-gray-600">
                  <p className="flex items-center gap-2">
                    <span className="font-semibold">⏰</span>
                    {dept.time}
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-semibold">📍</span>
                    {dept.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 프로그램 안내 */}
          <div className="mt-16 bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
              공통 프로그램
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="text-lg font-bold text-blue-700 mb-2">주일 예배</h3>
                <p className="text-gray-600 text-sm">
                  연령별 맞춤 예배를 통해 하나님을 경배합니다.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="text-lg font-bold text-blue-700 mb-2">성경 공부</h3>
                <p className="text-gray-600 text-sm">
                  체계적인 성경 교육으로 말씀의 기초를 다집니다.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="text-lg font-bold text-blue-700 mb-2">특별 활동</h3>
                <p className="text-gray-600 text-sm">
                  캠프, 수련회 등 다양한 활동으로 신앙을 키웁니다.
                </p>
              </div>
            </div>
          </div>

          {/* 문의 */}
          <div className="mt-12 text-center p-6 bg-gray-50 rounded-lg">
            <p className="text-gray-700 mb-2">
              각 부서에 대한 자세한 문의는 교육부로 연락 주시기 바랍니다.
            </p>
            <p className="text-blue-600 font-semibold">교육부: 02-1234-5678</p>
          </div>
        </div>
      </div>
    </div>
  );
}

