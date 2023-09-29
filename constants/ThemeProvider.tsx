"use client";

import React, { useContext, useState, useEffect, createContext } from "react";

interface ThemeContextType {
  mode: string;
  setMode: (mode: string) => void;
}

const themeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [mode, setMode] = useState("");

  const handleThemeChange = () => {
    if (mode === "dark") {
      setMode("light");
      document.documentElement.classList.add("light");
    } else {
      setMode("dark");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    handleThemeChange();
  }, ["mode"]);

  return (
    <themeContext.Provider value={{ mode, setMode }}>
      {children}
    </themeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(themeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }
  return context;
};
