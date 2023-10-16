
import React from 'react';
import { HiMoon } from 'react-icons/hi';

const Navigation = () => {
  return (
    <div className='d-flex justify-content-between align-items-center w-50'>
      <h1 className='logo'>devfinder</h1>

      <div className='d-flex algn-items-center gap-2'>
        <h4 className='theme-text text-uppercase mt-1'>dark</h4>

        <span className='theme-icon'>
          <HiMoon color='#697C9A' size='18px'/>
        </span>
      </div>

    </div>
  );
}

export default Navigation;
