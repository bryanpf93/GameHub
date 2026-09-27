import { useScrollToTop } from "@/hooks/useScrollToTop";

import { GameDetailsSection } from "./components/game-detail-section/GameDetailSection";

export const GameDetailsPage = () => {
  useScrollToTop();
  return <GameDetailsSection />;
};
