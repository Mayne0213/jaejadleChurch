import tabs from "@/const/tabs";

// 타입 정의
export interface TabInfo {
  title: string;
  subtitle: string;
  subtitleEnglish: string;
  image: string;
  index: number;
  description: string;
  tab: typeof tabs[number];
  submenu: typeof tabs[number]["submenu"][number];
}

export const getTabInfo = (pathname: string): TabInfo | null => {
  for (const [index, tab] of tabs.entries()) {
    for (const item of tab.submenu) {
      if (item.href === pathname) {
        return {
          title: tab.label,
          subtitle: item.label,
          subtitleEnglish: item.englishLabel,
          image: tab.imageHref,
          index,
          description: item.description,
          tab,
          submenu: item,
        };
      }
    }
  }
  return null;
};

export const getNavbarTabs = () => {
  return tabs.map((tab) => ({
    label: tab.label,
    // 항상 첫 번째 submenu 항목으로 이동 (루트 페이지가 없으므로)
    href: tab.submenu[0]?.href || "#",
  }));
};