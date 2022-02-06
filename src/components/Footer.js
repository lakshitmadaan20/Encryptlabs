import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';


function Footer() {
  return (
    <div className='footer-container'>
      <div>
      <iframe src="https://blockchainunmasked527.substack.com/embed" width="600" height="200" style={{border:"1px solid", background:"white", frameborder:"0", scrolling:"no"}} ></iframe>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <p className='social-logo'>
          
               EncryptLabs
            </p>
          </div>
          <small className='website-rights'>EncryptLabs © 2022</small>
          <div className='social-icons'>
            <a
              className='social-icon-link'
              href=''
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </a>
            <a
              className='social-icon-link'
              href='https://www.instagram.com/blockchainunmasked/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </a>
            <a
              className='social-icon-link'
              href='https://www.youtube.com/channel/UChYFWdJ5lgEwS3kW9mCvCRA'
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </a>
            
            <a
              className='social-icon-link'
             href=''
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;