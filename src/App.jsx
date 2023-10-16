import React, { useContext } from 'react';
import Navigation from './component/Navigation';
import SearchForm from './component/SearchForm';
import { ThemeContext } from './component/ContextTheme';

function App() {
  const { darkTheme, themeHandler } = useContext(ThemeContext);

  const bgLight = 'app-wrapper d-flex flex-column gap-3 justify-content-center align-items-center';
  const bgDark = 'app-wrapper d-flex flex-column gap-3 align-items-center justify-content-center dark';

  return (
    <div className={!darkTheme ? bgLight : `${bgDark} dark`}>
      <Navigation />
      <SearchForm />
    </div>
  );
}

export default App;
