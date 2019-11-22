import React from 'react';
import logo from './logo.svg';
import './App.css';
import GenderizeComp from './components/GenderizeComp';

function App(props) {
  return (
    <div className='App'>
      <GenderizeComp {...props} />
    </div>
  );
}

export default App;
