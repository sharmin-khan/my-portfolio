import React from 'react';
import Hero from '../component/Hero';
import About from '../component/About';

const Home = () => {
    return (
        <div className="pt-20">
            <Hero/>
            <About/>
        </div>
    );
};

export default Home;