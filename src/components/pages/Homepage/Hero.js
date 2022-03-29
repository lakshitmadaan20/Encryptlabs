import React from 'react';
import { Button } from '../../Button';
import './Hero.css';
import {Link} from 'react-router-dom'

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1 className="text-center">Marketing Metaverse</h1>
      <p className="text-center">Tagline</p>
      <div className='hero-btns'>
        <Link to="/services">
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;