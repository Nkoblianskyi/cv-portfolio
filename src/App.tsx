import React from 'react';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
    </div>
  );
}

export default App;
