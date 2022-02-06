import React from 'react';
import './Pricing.css';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';


function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          {/* <h1 className='pricing__heading text-center'>Pricing Plans</h1> */}
          <div className='pricing__container'>
            <div to='' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaFire />
                </div>
                <h3></h3>
                <h4></h4>
              
                <ul className='pricing__container-features'>
                <li className="text-center"></li>
              
                </ul>
                {/* <Button buttonSize='btn--wide' buttonColor='primary'>
                  Choose Plan
                </Button> */}
              </div>
            </div>
            <div className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <BsXDiamondFill />
                </div>
                <h3></h3>
                <h4></h4>
              
                <ul className='pricing__container-features'>
                <li className="text-center"></li>
                </ul>
                {/* <Button buttonSize='btn--wide' buttonColor='blue'>
                  Choose Plan
                </Button> */}
              </div>
            </div>
            <div className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GiCrystalize />
                </div>
                <h3></h3>
                <h4></h4>
         
                <ul className='pricing__container-features'>
                <li className="text-center"></li>
                </ul>
                {/* <Button buttonSize='btn--wide' buttonColor='primary'>
                  Choose Plan
                </Button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;
