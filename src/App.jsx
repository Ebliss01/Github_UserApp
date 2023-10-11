import React from 'react';
import Navigation from './component/Navigation';
import SearchForm from './component/SearchForm';

function App() {
  return (
    <div>
      <div className='app-wrapper d-flex flex-column gap-3 align-items-center justify-content-center'>
        <Navigation />
        <SearchForm />
      </div>
      {/* <button className='btn btn-success'>GitHub</button> */}
    </div>
  );
}

export default App;

