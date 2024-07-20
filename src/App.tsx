import React from 'react';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Projects } from './components/projects/projects';
import { Footer } from './components/footer/footer';
import './i18n';
import { useTranslation } from 'react-i18next';

const App: React.FC = () => {

  return (
    <div className="App container">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>

  );
};

export default App;

