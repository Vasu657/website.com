// App.jsx
import React from 'react';
import { ThemeProvider } from './context/ThemeContext';

import Header from './components/layout/Header.jsx';
import Hero from './components/sections/Hero.jsx';
import About from './components/sections/About.jsx';
import Footer from './components/layout/Footer.jsx';
import Skills from './components/sections/Skills.jsx';
import Project from './components/sections/Projects.jsx';
import Experience from './components/sections/Experience.jsx';
import Testimonials from './components/sections/Testimonials.jsx';
import Contact from './components/sections/Contact.jsx';

import './styles/global.css';

function App() {
    return (
        <ThemeProvider>
            <div className="app">
                <Header />
                <main>
                    <Hero />
                    <About />
                    <Skills />
                    <Project />
                    <Experience />
                    <Testimonials />
                    <Contact />
                </main>
                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default App;
