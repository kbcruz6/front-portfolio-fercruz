import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextPovider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
  };

  const [checked, setChecked] = useState(false);

  const onToggle = () => {
    toggleTheme();
    setChecked(!checked);
  };

  const data = {
    theme,
    setTheme,
    isDarkTheme,
    toggleTheme,
    checked,
    setChecked,
    onToggle,
  };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export default ThemeContextPovider;
