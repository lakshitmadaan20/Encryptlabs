import React from 'react';
import { Button } from '../../Button';
import './Hero.css';
import {Link} from 'react-router-dom'

function HeroSection() {
  return (
    <div className='hero-container'>
      <img className="back-image" src='https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA1fHxtYWtldXB8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'/>
      <h1 className="text-center">Dikshita Jindal Makeovers</h1>
      <p className="text-center">Want to get Stuck in a Paradise?</p>
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