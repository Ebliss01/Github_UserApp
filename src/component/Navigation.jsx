
import React, { useContext } from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';
import { ThemeContext } from './ContextTheme';

const Navigation = () => {
  const {darkTheme, themeHandler} = useContext(ThemeContext)

  return (
    <div className='d-flex justify-content-between align-items-center w-50'>
      <h1 className={!darkTheme?'logo':'logo logo-white'}>devfinder</h1>

      <div className='d-flex algn-items-center gap-2'>
        <h4 className='theme-text text-uppercase mt-1'>
          {
            !darkTheme ? 'Dark':'Light'
          }
          
          </h4>

        <span className='theme-icon' onClick={themeHandler}>
          {
            !darkTheme ? <HiMoon color='#697C9A' size='20px'/>:<HiSun color='#fff' size='20px'/>
          }
          
        </span>
      </div>

    </div>
  );
}

export default Navigation;
