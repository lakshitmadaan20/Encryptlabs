import React from 'react';
import { Button } from '../../Button';
import './Hero.css';
import {Link} from 'react-router-dom'

function HeroSection() {
  return (
    <div className='hero-container'>
      <img className="back-image" src='https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFrZXVwJTIwYXJ0aXN0fGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'/>
      <h1 className="text-center">Dikshita Jindal Makeovers</h1>
      <p className="text-center">Get Stuck In A Paradise</p>
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