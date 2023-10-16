// import React from 'react';
import { useContext } from 'react';
import Navigation from './component/Navigation';
import SearchForm from './component/SearchForm';
import { ThemeContext } from './component/ContextTheme';

function App() {
  const {darkTheme, themeHandler } = useContext(ThemeContext)

  const bgLight = 'app-wrapper d-flex flex-column gap-3 align-items-center justify-content-center';
  const bgDark = 'app-wrapper d-flex flex-column gap-3 align-items-center justify-content-center dark';
  
  return (
      <div className = {darkTheme ? 'app-wrapper d-flex flex-column gap-3 align-items-center justify-content-center':'app-wrapper d-flex flex-column gap-3 align-items-center justify-content-center dark'}>
        <Navigation />
        <SearchForm />
      </div>
    

    //   <div>
    //   <button className='btn btn-success'>GitHub</button>
    // </div>
  );
}

export default App;