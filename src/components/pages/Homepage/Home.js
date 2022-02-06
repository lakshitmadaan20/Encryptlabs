import React from 'react';
import HeroSection1 from './HeroSection1'
import { homeObjTwo} from './Data';
import Hero from './Hero'


function Home() {
  return (
    <>
      <Hero/>
      <HeroSection1 {...homeObjTwo}/>
    </>
  );
}

export default Home;
