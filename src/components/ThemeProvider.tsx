"use client";

/**
 * ThemeProvider
 * Manages dark/light mode across the entire app.
 * Persists the user's preference in localStorage and applies the "dark" class to <html>.
 */

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Create the context with a default value
const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  // On first mount, read saved preference from localStorage (or default to dark)
  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme") as Theme | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = saved ?? (prefersDark ? "dark" : "light");
    setTheme(initial);
    setMounted(true);
  }, []);

  // Apply/remove the "dark" class on <html> whenever theme changes
  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("portfolio-theme", theme);
  }, [theme, mounted]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  // Prevent flash of wrong theme before hydration
  if (!mounted) {
    return (
      <div style={{ visibility: "hidden" }} aria-hidden="true">
        {children}
      </div>
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook for consuming the theme context
export const useTheme = () => useContext(ThemeContext);
