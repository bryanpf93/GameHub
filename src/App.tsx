import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";

import { GamesPage } from "@/pages/games-page/GamesPage";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <h1>GAMEHUB</h1>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/games" element={<GamesPage />} />
      </Routes>
    </QueryClientProvider>
  );
};

export default App;
