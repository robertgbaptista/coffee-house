import React from 'react';
import './App.css';
import Announcement from './components/announcement';
import CallToAction from './components/callToAction';
import NavBar from './components/navbar';
import Offerings from './components/offerings';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Announcement />
      <CallToAction />
      <Offerings />
    </div>
  );
}

export default App;
