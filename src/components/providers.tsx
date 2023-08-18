import React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { RecoilRoot } from "recoil";

type TProvidersProps = {
  children: React.ReactNode;
};

function providers({ children }: TProvidersProps) {
  return (
    <RecoilRoot>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {children}
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default providers;
