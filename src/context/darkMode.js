import React, { useState } from "react";

import { createContext } from "react";

export const themes = {
  isDark: false,
};

export const ThemeContext = createContext({
  isDark: false,
  changeTheme: () => {},
});

export default function ThemeContextWrapper(props) {
  const [theme, setTheme] = useState(themes.isDark);

  function changeTheme(theme) {
    setTheme(theme);
  }

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
