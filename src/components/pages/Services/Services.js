import React from 'react';
import HeroSection from '../../HeroSection';
import Pricing from './Pricing';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';


function Services() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjFour} />
      <Pricing/>
    </>
  );
}

export default Services;
