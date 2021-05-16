import React from 'react';
// import ImageSlider from '../../ImageSlider'
// import { SliderData } from '../../SliderData';
import HeroSection1 from './HeroSection1'
import { homeObjTwo } from './Data';
import Hero from './Hero'

function Home() {
  return (
    <>
      <Hero/>
      <HeroSection1 {...homeObjTwo} />
      {/* <ImageSlider slides={SliderData} /> */}
    </>
  );
}

export default Home;
