import { useScrollToTop } from "@/hooks/useScrollToTop";

import { GamesSection } from "./components/games-section/GamesSection";

export const DashboardPage = () => {
  useScrollToTop();

  return (
    <div>
      <h1>Dashboard</h1>
      <GamesSection />
    </div>
  );
};
