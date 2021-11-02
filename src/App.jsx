import React from 'react';
import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import MyProvider from './context/MyProvider';

const App = () => {
  return (
    <MyProvider>
      <main>
      <Header />
      <Section />
      </main>
    </MyProvider>
  );
}

export default App;

