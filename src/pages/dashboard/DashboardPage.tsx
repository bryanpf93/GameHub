import { useScrollToTop } from "@/hooks/useScrollToTop";

import { TrendingSection } from "./components/trending-section/TrendingSection";

export const DashboardPage = () => {
  useScrollToTop();

  return (
    <div>
      <h1>Dashboard</h1>
      <TrendingSection />
    </div>
  );
};
