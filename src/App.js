import React, { Component } from 'react';

import './assets/css/style.css';

import MobileNav from './components/MobileNav';
import Header from './components/Header';
import Hero from './components/SectionHero';
import About from './components/About';
import Interests from './components/Interests';
import Articles from './components/Articles';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="home-wrap">
        <MobileNav />
        <Header />
        <div className="home-sections">
          <Hero />
          <About title={"Web Developer& Entrepreneur& Changemaker..."} subtitle={"...born to create and share..."}/>
          <Interests />
          <Articles />
          <Skills />
          <Projects />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
