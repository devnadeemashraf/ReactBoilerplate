import { ThemeToggle } from "../theme-toggle";

const navbar = () => {
  return (
    <header className="fixed top-0 overflow-hidden w-full flex items-center justify-between px-4 h-16 z-10">
      <h1>App Name</h1>
      <ThemeToggle />
    </header>
  );
};

export default navbar;
