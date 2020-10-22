import React from 'react';
import Header from './components/Header';
import LinkBar from './components/LinkBar';
import Technologies from './components/Technologies';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <main className="App__container">
        <Header />
        <LinkBar />
        <Technologies />
        <Timeline />
        <Footer />
      </main>
    </>
  );
}

export default App;
