import { RecoilRoot } from "recoil";

import { ThemeProvider } from "@/components/providers/theme-provider";

import { ChildrenProps } from "@/types/globals";

import { APP_NAME } from "@/lib/constants";

function providers({ children }: ChildrenProps) {
  return (
    <RecoilRoot>
      <ThemeProvider defaultTheme="system" storageKey={`${APP_NAME}-ui-theme`}>
        {children}
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default providers;
