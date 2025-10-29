import React from 'react';

export default function AnnouncementsPage() {
  const announcements = [
    {
      id: 1,
      category: '공지',
      title: '2025년 상반기 새가족 환영회 안내',
      date: '2025.01.15',
      excerpt: '새로 오신 성도님들을 위한 환영회를 진행합니다. 많은 참석 부탁드립니다.',
      isNew: true,
    },
    {
      id: 2,
      category: '행사',
      title: '청년부 겨울 수련회',
      date: '2025.01.10',
      excerpt: '청년부 겨울 수련회가 2월 첫째 주에 진행됩니다. 자세한 사항은 청년부 게시판을 확인해주세요.',
      isNew: true,
    },
    {
      id: 3,
      category: '공지',
      title: '주일학교 교사 모집',
      date: '2025.01.05',
      excerpt: '2025년 주일학교를 섬겨주실 교사를 모집합니다. 관심 있으신 분들은 교육부로 연락 주세요.',
      isNew: false,
    },
    {
      id: 4,
      category: '감사',
      title: '성탄절 예배 감사',
      date: '2024.12.26',
      excerpt: '은혜로운 성탄절 예배를 함께 드린 모든 성도님들께 감사드립니다.',
      isNew: false,
    },
    {
      id: 5,
      category: '행사',
      title: '신년 기도회 안내',
      date: '2024.12.20',
      excerpt: '새해를 맞이하여 특별 기도회를 진행합니다. 성도 여러분의 많은 참여 바랍니다.',
      isNew: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white w-full">
      <div className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          {/* 게시판 헤더 */}
          <div className="mb-8 flex justify-between items-center">
            <p className="text-gray-600">총 {announcements.length}개의 게시글</p>
          </div>

          {/* 게시글 리스트 */}
          <div className="space-y-4">
            {announcements.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        item.category === '공지'
                          ? 'bg-blue-100 text-blue-700'
                          : item.category === '행사'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-purple-100 text-purple-700'
                      }`}
                    >
                      {item.category}
                    </span>
                    {item.isNew && (
                      <span className="px-2 py-1 bg-red-500 text-white text-xs rounded-full font-bold">
                        NEW
                      </span>
                    )}
                  </div>
                  <span className="text-sm text-gray-500">{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.excerpt}</p>
              </div>
            ))}
          </div>

          {/* 페이지네이션 */}
          <div className="mt-12 flex justify-center gap-2">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              1
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
              2
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
              3
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

