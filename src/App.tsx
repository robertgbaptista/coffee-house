import React from 'react';
import './App.css';
import Announcement from './components/announcement';
import CallToAction from './components/callToAction';
import NavBar from './components/navbar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Announcement />
      <CallToAction />
    </div>
  );
}

export default App;
