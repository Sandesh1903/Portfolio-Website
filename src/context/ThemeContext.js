import React, { createContext, useState, useContext } from "react";

// Create a context with default theme as 'dark'
const ThemeContext = createContext();

// ThemeProvider component to wrap around parts of your app that need access to the theme
export const ThemeProvider = ({ children }) => {
  // State to manage the current theme, default is 'dark'
  const [theme, setTheme] = useState("dark");

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  // Value that will be provided to any descendants of ThemeProvider
  const themeValue = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={themeValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the ThemeContext
export const useTheme = () => useContext(ThemeContext);
