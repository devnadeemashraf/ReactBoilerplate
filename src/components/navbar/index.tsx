import NavLinks from "./nav-links";
import { ThemeToggle } from "@/components/theme-toggle";

import H4 from "@/components/typo/H4";

const navbar = () => {
  return (
    <header className="fixed top-0 overflow-hidden w-full flex items-center justify-between px-4 h-16 z-10 border-b">
      <H4>Boilerplate App</H4>
      <div className="flex items-center justify-center gap-4">
        <NavLinks />
        <ThemeToggle />
      </div>
    </header>
  );
};

export default navbar;
