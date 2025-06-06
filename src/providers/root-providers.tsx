"use client";
import { Toaster } from "sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./theme-provider";

export const queryClient = new QueryClient();

export const RootProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <NuqsAdapter>
          <TooltipProvider>{children}</TooltipProvider>
          <ReactQueryDevtools
            initialIsOpen={process.env.APP_ENV === "development"}
          />
        </NuqsAdapter>
        <Toaster
          richColors
          visibleToasts={3}
          expand={true}
        />
      </ThemeProvider>
    </QueryClientProvider>
  );
};
