import NavLinks from "./nav-links";
import { ThemeToggle } from "@/components/theme-toggle";

import H4 from "@/components/typo/H4";
import { Github } from "lucide-react";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <header className="fixed top-0 overflow-hidden w-full flex items-center justify-between px-4 h-16 z-10 border-b">
      <H4>Boilerplate App</H4>
      <div className="flex items-center justify-center gap-4">
        <NavLinks />
        {/* FEEL FREE TO REMOVE THE CODE BELOW THIS */}
        <Link
          to="https://github.com/devNadeemAshraf/ReactBoilerplate"
          target="_blank"
          className="h-10 w-10 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground"
        >
          <Github />
        </Link>
        {/* FEEL FREE TO REMOVE THE CODE ABOVE THIS */}
        <ThemeToggle />
      </div>
    </header>
  );
};

export default navbar;
