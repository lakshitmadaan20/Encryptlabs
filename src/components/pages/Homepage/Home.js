import React from 'react';
// import ImageSlider from '../../ImageSlider'
// import { SliderData } from '../../SliderData';
import HeroSection1 from './HeroSection1'
import { homeObjTwo, homeObjOne } from './Data';
import Hero from './Hero'
import HeroSection from '../../HeroSection'

function Home() {
  return (
    <>
      <Hero/>
      <HeroSection {...homeObjOne} />
      <HeroSection1 {...homeObjTwo}/>
    </>
  );
}

export default Home;
