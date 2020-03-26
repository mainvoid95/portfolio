import React from 'react';
import './App.css';
import Title from './components/title';
import Footer from './components/footer';
import Profile from './components/profile';
import Projects from './components/projects';

function App() {
  return (
    <div className="App">
      <Title></Title>
      <Profile></Profile>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}

export default App;
