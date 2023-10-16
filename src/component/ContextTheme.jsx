import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ContextTheme = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const themeHandler = () => {
    setDarkTheme(prevDarkTheme => !prevDarkTheme);
  }

  return (
    <ThemeContext.Provider value={{ darkTheme, themeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ContextTheme;
