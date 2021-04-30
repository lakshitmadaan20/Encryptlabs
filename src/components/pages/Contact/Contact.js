import React from 'react';
import HeroSection1 from './HeroSection1';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';


function Contact() {
  return (
    <>
      <HeroSection1 {...homeObjOne} />
    </>
  );
}

export default Contact;
