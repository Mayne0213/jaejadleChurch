import React from 'react';

export default function GalleryPage() {
  const albums = [
    {
      id: 1,
      title: '2025 신년 예배',
      date: '2025.01.01',
      images: 12,
      thumbnail: '🎉',
    },
    {
      id: 2,
      title: '성탄절 예배 및 축제',
      date: '2024.12.25',
      images: 25,
      thumbnail: '🎄',
    },
    {
      id: 3,
      title: '추수감사절 예배',
      date: '2024.11.24',
      images: 18,
      thumbnail: '🌾',
    },
    {
      id: 4,
      title: '가을 야외 예배',
      date: '2024.10.15',
      images: 20,
      thumbnail: '🍂',
    },
    {
      id: 5,
      title: '여름 수련회',
      date: '2024.08.10',
      images: 35,
      thumbnail: '⛺',
    },
    {
      id: 6,
      title: '어린이날 행사',
      date: '2024.05.05',
      images: 28,
      thumbnail: '👶',
    },
  ];

  return (
    <div className="min-h-screen bg-white w-full">
      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* 앨범 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {albums.map((album) => (
              <div
                key={album.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
              >
                {/* 썸네일 */}
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 h-48 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform">
                  {album.thumbnail}
                </div>
                
                {/* 앨범 정보 */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {album.title}
                  </h3>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span>{album.date}</span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {album.images}장
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 더보기 버튼 */}
          <div className="mt-12 text-center">
            <button className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold">
              더 많은 앨범 보기
            </button>
          </div>

          {/* 안내 */}
          <div className="mt-12 bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
            <h3 className="text-lg font-bold text-blue-900 mb-2">사진 제공 안내</h3>
            <p className="text-gray-700">
              교회 행사 사진을 보내주시면 앨범에 추가하겠습니다. 
              사진은 교회 이메일로 보내주시기 바랍니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

