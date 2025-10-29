import Image from "next/image";

export default function Ministries() {
  
  const tabs = [
    { name: "담임목사님을 소개합니다", image: "/wellness.jpg" },
    { name: "섬기는 분들", image: "/child.jpg" },
    { name: "오시는 길", image: "/stress.jpg" }
  ];

  return (
    <section
      id="ministries"
      className="py-12 smalltablet:py-16 pc:py-20 relative overflow-hidden"
    >
      {/* 배경 이미지 */}
      <Image
        src="/image.png"
        alt="Ministries background"
        fill
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
        className="object-cover"
      />
      {/* 검은색 오버레이 (가독성 향상 위해 약간 더 진하게) */}
      <div className="absolute inset-0 bg-black opacity-30 z-0"/>
      
      <div className="max-w-[1400px] mx-auto px-4 smalltablet:px-6 pc:px-8 relative z-10">
        <h2 className="text-white text-3xl smalltablet:text-4xl pc:text-5xl text-end font-black tracking-tight mb-8 smalltablet:mb-10 pc:mb-12">More.</h2>
        {/* 3열 카드 배치: 좌/중앙/우 분배 */}
        <div className="grid grid-cols-1 smalltablet:grid-cols-2 pc:grid-cols-3 gap-6 smalltablet:gap-8">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className="group/card rounded-xl smalltablet:rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm p-6 smalltablet:p-8 text-white transition-all hover:bg-white/15 hover:border-white/30 hover:-translate-y-0.5"
            >
              <div className="text-xl smalltablet:text-2xl font-bold drop-shadow">{tab.name}</div>
              <div className="mt-2 smalltablet:mt-3 flex min-h-6 items-center gap-2 text-xs smalltablet:text-sm opacity-0 group-hover/card:opacity-100 transition-opacity">
                VIEW MORE
                <svg className="w-3 h-3 smalltablet:w-4 smalltablet:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

