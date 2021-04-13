import React from 'react';
import ImageSlider from '../../ImageSlider'
import { SliderData } from '../../SliderData';
import Hero from './Hero';
import HeroSection from '../../HeroSection'
import {homeObjOne} from './Data';

function Home() {
  return (
    <>
      <Hero/>
      <HeroSection {...homeObjOne} />
      <ImageSlider slides={SliderData} />
    </>
  );
}

export default Home;
