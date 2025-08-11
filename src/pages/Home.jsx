import React from 'react';
import Hero from '../component/Hero';
import About from '../component/About';
import Skills from '../component/Skills';

const Home = () => {
    return (
        <div id="home" className="pt-20">
            <Hero/>
            <About/>
            <Skills/>
        </div>
    );
};

export default Home;