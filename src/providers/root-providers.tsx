"use client";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { useEffect, useState } from "react";

export const queryClient = new QueryClient();

export const RootProviders = ({ children }: { children: React.ReactNode }) => {
  const [clientSide, setClientSide] = useState(false);
  useEffect(() => {
    setClientSide(true);
  }, []);

  if (!clientSide) {
    return <>{children}</>;
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <NuqsAdapter>
        <QueryClientProvider client={queryClient}>
          {children}
          <ReactQueryDevtools
            initialIsOpen={process.env.APP_ENV === "development"}
          />
        </QueryClientProvider>
      </NuqsAdapter>
      <Toaster
        richColors
        visibleToasts={3}
        expand={true}
      />
    </ThemeProvider>
  );
};
