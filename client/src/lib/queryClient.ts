import { QueryClient } from "@tanstack/react-query";

async function handleRequest(url: string, options?: RequestInit) {
  const sessionId = localStorage.getItem('sessionId');
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...options?.headers,
  };
  
  if (sessionId) {
    headers['x-session-id'] = sessionId;
  }

  const response = await fetch(url, {
    ...options,
    headers,
    credentials: 'include',
  });

  const newSessionId = response.headers.get('x-session-id');
  if (newSessionId) {
    localStorage.setItem('sessionId', newSessionId);
  }

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: response.statusText }));
    throw new Error(error.error || error.message || "Request failed");
  }

  return response.json();
}

export async function apiRequest(url: string, options?: RequestInit) {
  return handleRequest(url, options);
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }) => {
        const url = queryKey[0] as string;
        return handleRequest(url);
      },
      staleTime: 1000 * 60,
      retry: false,
    },
  },
});
