import { useScrollToTop } from "@/hooks/useScrollToTop";

import { GamesSection } from "./components/games-section/GamesSection";

export const GamesPage = () => {
  useScrollToTop();

  return <GamesSection />;
};
