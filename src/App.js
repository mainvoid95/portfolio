import React from 'react';
import './App.css';
import Title from './components/title';
import Footer from './components/footer';
import Header from './components/header';
import Profile from './components/profile';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Title></Title>
      <Profile></Profile>
      <Footer></Footer>
    </div>
  );
}

export default App;
