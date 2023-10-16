import React from 'react';
import { CgSearch } from 'react-icons/cg';

const SearchForm = () => {
  return (
    <div className='d-flex justify-content-between align-items-center w-50 form-wrapper py-3 px-2 rounded-10'>
        <div className='d-flex gap-2 align-items-center w-100'>
        <CgSearch color='#0079FF' size='24px' />
        <input type='text' placeholder='Search Github Username...' className='form-control boder border-o'/>
        </div>
      <button className='btn btn-primary'>Search</button>
    </div>
  );
}

export default SearchForm;