import Image from "next/image";

export default function Intro() {
  const items = [
    {
      image: "/home/church1.jpg",
      title: "주일 설교",
      subtitle: "Sunday Sermon",
      description: "제자들교회는 예수님의 사랑으로 하나되는 공동체입니다. 서로를 소중히 여기며 함께 성장하는 교회입니다."
    },
    {
      image: "/home/church2.png",
      title: "주일 찬양",
      subtitle: "Sunday Worship",
      description: "성경 말씀을 통해 하나님을 알아가고, 실천하며 살아가는 건강한 교회 공동체로 함께합니다."
    },
    {
      image: "/home/pray.png",
      title: "금요 성령집회",
      subtitle: "Friday Spirit Meeting",
      description: "예수님의 사랑을 실천하며 이웃과 지역사회를 섬기며 나아가는 교회입니다."
    }
  ];

  return (
    <section id="intro" className="py-16 smalltablet:py-20 pc:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 smalltablet:px-6 pc:px-8">
        <div className="flex flex-col smalltablet:flex-row justify-between smalltablet:items-end gap-6 smalltablet:gap-4 mb-12 smalltablet:mb-16">
          <div>
            <h2 className="text-3xl smalltablet:text-4xl pc:text-5xl font-black text-gray-800 mb-2 tracking-tight">Worship services.</h2>
            <p className="text-gray-600 text-lg smalltablet:text-xl font-semibold">금주의 예배와 찬양</p>
          </div>
          <button className="bg-gradient-to-r from-[#7ba5d6] to-[#6b95c6] hover:from-[#6b95c6] hover:to-[#5b85b6] text-white px-6 py-2.5 smalltablet:px-8 smalltablet:py-3 text-sm smalltablet:text-base flex items-center gap-2 transition-colors rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6b95c6] active:scale-[0.98] self-start smalltablet:self-auto">
            VIEW MORE
            <svg className="w-4 h-4 smalltablet:w-5 smalltablet:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        <div className="grid smalltablet:grid-cols-2 pc:grid-cols-3 gap-6 smalltablet:gap-8">
          {items.map((item, index) => (
            <div 
              key={index}
              className="group hover:cursor-pointer rounded-2xl smalltablet:rounded-3xl p-8 smalltablet:p-10 relative overflow-hidden hover:shadow-xl transition-shadow smalltablet:col-span-2 pc:col-span-1 pc:aspect-square"
            >
              {/* 배경 이미지 레이어 */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* 검은색 오버레이 */}
              <div className="absolute inset-0 z-10 bg-black opacity-50 group-hover:opacity-20 transition-opacity"/>
              
              {/* 컨텐츠 */}
              <div className="relative z-20">
                
                {/* 텍스트 */}
                <div className="flex flex-col justify-center h-full">
                  <h3 className="text-2xl smalltablet:text-3xl pc:text-4xl font-extrabold text-white mb-2 smalltablet:mb-3">
                    {item.title}
                  </h3>
                  <h4 className="text-lg smalltablet:text-xl font-bold text-white mb-3 smalltablet:mb-3 pc:mb-6">
                    {item.subtitle}
                  </h4>
                  <p className="text-sm smalltablet:text-base text-white leading-relaxed line-clamp-2 pc:line-clamp-none">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* 오른쪽 아래 화살표 */}
              <div className="absolute bottom-5 right-5 smalltablet:bottom-6 smalltablet:right-6 z-20">
                <svg className="w-6 h-6 smalltablet:w-8 smalltablet:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

