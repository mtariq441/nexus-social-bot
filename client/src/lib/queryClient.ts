import { QueryClient } from "@tanstack/react-query";

export async function apiRequest(url: string, options?: RequestInit) {
  console.warn('API request attempted but no backend is configured:', url);
  throw new Error('No backend server available');
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
      retry: false,
    },
  },
});
