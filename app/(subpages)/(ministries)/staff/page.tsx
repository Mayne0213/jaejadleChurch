import React from 'react';

export default function StaffPage() {
  const staff = [
    {
      name: '담임목사',
      role: '목회',
      icon: '✝️',
      description: '말씀 선포와 목회',
      color: 'blue',
    },
    {
      name: '부목사',
      role: '청년부',
      icon: '🙏',
      description: '청년 사역',
      color: 'indigo',
    },
    {
      name: '전도사',
      role: '교육부',
      icon: '📚',
      description: '교육 및 양육',
      color: 'green',
    },
    {
      name: '찬양인도자',
      role: '예배팀',
      icon: '🎵',
      description: '예배 찬양',
      color: 'purple',
    },
    {
      name: '행정간사',
      role: '행정',
      icon: '📋',
      description: '교회 행정',
      color: 'gray',
    },
    {
      name: '권사',
      role: '구역장',
      icon: '🤝',
      description: '구역 섬김',
      color: 'pink',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: string } = {
      blue: 'from-blue-100 to-blue-200 border-blue-500',
      indigo: 'from-indigo-100 to-indigo-200 border-indigo-500',
      green: 'from-green-100 to-green-200 border-green-500',
      purple: 'from-purple-100 to-purple-200 border-purple-500',
      gray: 'from-gray-100 to-gray-200 border-gray-500',
      pink: 'from-pink-100 to-pink-200 border-pink-500',
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-white w-full">
      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* 소개 */}
          <div className="mb-12 text-center">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              하나님의 교회를 섬기는 귀한 일꾼들을 소개합니다. 
              모든 섬김이들이 한마음으로 교회를 섬기며 성도들을 섬기고 있습니다.
            </p>
          </div>

          {/* 섬김이 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {staff.map((member, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${getColorClasses(member.color)} rounded-lg p-8 shadow-lg hover:shadow-xl transition-all hover:scale-105 border-t-4`}
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">{member.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-700 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 섬김 안내 */}
          <div className="bg-blue-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
              함께 섬기실 분을 찾습니다
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-6 text-center shadow hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">🎹</div>
                <h3 className="font-bold text-gray-800 mb-2">반주자</h3>
                <p className="text-sm text-gray-600">예배 반주</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">👨‍🏫</div>
                <h3 className="font-bold text-gray-800 mb-2">교사</h3>
                <p className="text-sm text-gray-600">주일학교 교사</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">🎥</div>
                <h3 className="font-bold text-gray-800 mb-2">영상팀</h3>
                <p className="text-sm text-gray-600">예배 영상 제작</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">☕</div>
                <h3 className="font-bold text-gray-800 mb-2">다과팀</h3>
                <p className="text-sm text-gray-600">다과 준비</p>
              </div>
            </div>
          </div>

          {/* 연락 안내 */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-4">섬김에 관심이 있으신가요?</h3>
            <p className="text-gray-700 mb-6">
              교회를 함께 섬기실 분들을 찾고 있습니다. 
              자신의 은사를 발견하고 교회를 섬기는 기쁨을 누리시기 바랍니다.
            </p>
            <button className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold shadow-lg">
              섬김 신청하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

