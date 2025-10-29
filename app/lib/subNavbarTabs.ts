const tabs = [
  {
    label: "금주의 예배와 찬양",
    href: "/service",
    imageHref: "/image.png",
    sectionIndex: 0,
    submenu: [
      {
        label: "주일예배",
        englishLabel: "SUNDAY SERVICE",
        href: "/service/sunday",
        description: "주일 예배 안내입니다.",
      },
      {
        label: "수요예배",
        englishLabel: "WEDNESDAY SERVICE",
        href: "/service/wednesday",
        description: "수요 예배 안내입니다.",
      },
      {
        label: "금요예배",
        englishLabel: "FRIDAY SERVICE",
        href: "/service/friday",
        description: "금요 예배 안내입니다.",
      },
    ],
  },
  {
    label: "소식/앨범",
    href: "/news",
    imageHref: "/image.png",
    sectionIndex: 1,
    submenu: [
      {
        label: "교회소식",
        englishLabel: "NEWS",
        href: "/news/announcements",
        description: "교회의 최신 소식을 전합니다.",
      },
      {
        label: "사진앨범",
        englishLabel: "GALLERY",
        href: "/news/gallery",
        description: "교회 활동 사진을 확인하세요.",
      },
    ],
  },
  {
    label: "안내",
    href: "/ministries",
    imageHref: "/image.png",
    sectionIndex: 2,
    submenu: [
      {
        label: "교회소개",
        englishLabel: "ABOUT",
        href: "/ministries/about",
        description: "제자들교회를 소개합니다.",
      },
      {
        label: "부서안내",
        englishLabel: "DEPARTMENTS",
        href: "/ministries/departments",
        description: "교회 부서를 안내합니다.",
      },
      {
        label: "섬김이",
        englishLabel: "STAFF",
        href: "/ministries/staff",
        description: "교회 섬김이를 소개합니다.",
      },
    ],
  },
  {
    label: "오시는길",
    href: "/contact",
    imageHref: "/image.png",
    sectionIndex: 3,
    submenu: [
      {
        label: "찾아오시는길",
        englishLabel: "LOCATION",
        href: "/contact/location",
        description: "교회 위치를 안내합니다.",
      },
      {
        label: "문의하기",
        englishLabel: "CONTACT",
        href: "/contact/inquiry",
        description: "교회에 문의하세요.",
      },
    ],
  },
];

export default tabs;

