import type { ReactNode } from "react";

export const useQuery = () => ({
  data: [],
  isLoading: false,
  error: undefined,
  refetch: jest.fn()
});

export const QueryClient = jest.fn();

export const QueryClientProvider = jest
  .fn()
  .mockImplementation(({ children }: { children: ReactNode }) => (
    <div data-testid="query-client-provider">{children}</div>
  ));
