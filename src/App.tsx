import "./App.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { DashboardPage } from "@/pages/dashboard/DashboardPage";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <DashboardPage />
    </QueryClientProvider>
  );
};

export default App;
