import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "dark" | "light";

const STORAGE_KEY = "ys-gtm-theme";

const getInitialTheme = (): Theme => {
  if (typeof window === "undefined") return "dark";

  const savedTheme = window.localStorage.getItem(STORAGE_KEY);
  if (savedTheme === "dark" || savedTheme === "light") return savedTheme;

  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const isLight = theme === "light";

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.classList.toggle("light", isLight);
    document.documentElement.classList.toggle("dark", !isLight);
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [isLight, theme]);

  return (
    <button
      type="button"
      aria-label={isLight ? "Switch to night mode" : "Switch to light mode"}
      title={isLight ? "Switch to night mode" : "Switch to light mode"}
      aria-pressed={isLight}
      onClick={() => setTheme(isLight ? "dark" : "light")}
      className="relative inline-flex h-10 w-20 shrink-0 items-center rounded-full border border-border bg-gradient-card p-1 shadow-card transition-all duration-300 hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <span className="sr-only">{isLight ? "Switch to night mode" : "Switch to light mode"}</span>
      <span className="absolute left-3 text-muted-foreground transition-colors duration-300">
        <Moon className="h-4 w-4" />
      </span>
      <span className="absolute right-3 text-muted-foreground transition-colors duration-300">
        <Sun className="h-4 w-4" />
      </span>
      <span
        className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full text-white shadow-glow transition-transform duration-300 ${
          isLight ? "translate-x-10 bg-usa-red" : "translate-x-0 bg-primary"
        }`}
      >
        {isLight ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </span>
    </button>
  );
};

export default ThemeToggle;
