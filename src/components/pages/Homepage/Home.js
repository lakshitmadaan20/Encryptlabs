import React from 'react';
import ImageSlider from '../../ImageSlider'
import { SliderData } from '../../SliderData';
import HeroSection from '../../HeroSection'
import { homeObjOne, homeObjTwo } from './Data';
import Hero from './Hero'

function Home() {
  return (
    <>
      <Hero/>
      <HeroSection {...homeObjTwo} />
      <ImageSlider slides={SliderData} />
    </>
  );
}

export default Home;
