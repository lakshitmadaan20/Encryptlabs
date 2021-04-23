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
import { MdBrush, MdFingerprint } from 'react-icons/md';

function Footer() {
  return (
    <div className='footer-container'>
     
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Prices</h2>
            <p>How it works</p>
            <p>Testimonials</p>
            <p>Careers</p>
            <p>Investors</p>
            <p>Terms of Service</p>
          </div>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <p>Contact</p>
            <p>Support</p>
            <p>Destinations</p>
            <p>Sponsorships</p>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Services</h2>
            <p>Submit Video</p>
            <p>Ambassadors</p>
            <p>Agency</p>
            <p>Influencer</p>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <a href='https://www.instagram.com/stuck.in.a.paradise/'>Instagram</a>
            <a href='https://www.facebook.com/dikshita.jindal.5'>Facebook</a>
            <a href='https://www.youtube.com/channel/UC8mruwuMqRIL4TSftV5YsLw'>Youtube</a>
            <a href='https://www.linkedin.com/in/dikshita-jindal-638a901b3/'>Linkedin</a>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <p className='social-logo'>
          
               Dikshita Jindal
            </p>
          </div>
          <small className='website-rights'>Dikshita Jindal © 2020</small>
          <small className='website-rights'>Developed by Lakshit Madaan</small>
          <div className='social-icons'>
            <a
              className='social-icon-link'
              href='https://www.facebook.com/dikshita.jindal.5'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </a>
            <a
              className='social-icon-link'
              href='https://www.instagram.com/stuck.in.a.paradise/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </a>
            <a
              className='social-icon-link'
              href='https://www.youtube.com/channel/UC8mruwuMqRIL4TSftV5YsLw'
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </a>
            
            <a
              className='social-icon-link'
             href='https://www.linkedin.com/in/dikshita-jindal-638a901b3/'
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