import React from 'react';
import Hero from '../component/Hero';
import About from '../component/About';
import Skills from '../component/Skills';
import Services from '../component/Services';
import Projects from '../component/Projects';


const Home = () => {
    return (
        <div id="home" className="pt-20">
            <Hero/>
            <About/>
            <Skills/>
            <Projects/>
            <Services/>
         
           
        </div>
    );
};

export default Home;