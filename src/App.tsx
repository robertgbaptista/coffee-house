import React from 'react';
import './App.css';
import Announcement from './components/announcement';
import CallToAction from './components/callToAction';
import Contact from './components/contact';
import NavBar from './components/navbar';
import Offerings from './components/offerings';
import Social from './components/social';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Announcement />
      <CallToAction />
      <Offerings />
      <Social />
      <Contact />
    </div>
  );
}

export default App;
