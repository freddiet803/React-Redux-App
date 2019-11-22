import React from 'react';
import logo from './logo.svg';
import './App.css';
import GenderizeComp from './components/GenderizeComp';
import styled, { keyframes } from 'styled-components';

function App() {
  const H1 = styled.h1`
    color: palevioletred;
  `;

  return (
    <div className='App'>
      <H1>Genderize Me</H1>
      <GenderizeComp />
    </div>
  );
}

export default App;
