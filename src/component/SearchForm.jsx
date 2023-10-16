import React, { useContext } from 'react';
import { CgSearch } from 'react-icons/cg';
import { ThemeContext } from './ContextTheme';


const SearchForm = () => {
const {darkTheme} = useContext(ThemeContext)

  return (
    
    <div className={!darkTheme ? 'form-wrapper px-3 py-2 rounded':'form-wrapper dark px-3 py-2 rounded'}>
        <div className='d-flex gap-2 align-items-center w-100'>
        <CgSearch color='#0079FF' size='24px' />
        <input type='text' placeholder='Search Github Username...' className='form-control border border-0'/>
        </div>
      <button className='btn btn-primary'>Search</button>
    </div>
  );
}

export default SearchForm;