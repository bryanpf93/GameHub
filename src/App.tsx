import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Link, Route, Routes } from "react-router-dom";

import { GamesPage } from "@/pages/games-page/GamesPage";

import { GameDetailsPage } from "./pages/game-details-page/GameDetailsPage";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Link aria-label="home-link" to={"/games"}>
        <h1 aria-label="logo-label" className="logo">
          GAMEHUB
        </h1>
      </Link>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/games/:gameId" element={<GameDetailsPage />} />
      </Routes>
    </QueryClientProvider>
  );
};

export default App;
