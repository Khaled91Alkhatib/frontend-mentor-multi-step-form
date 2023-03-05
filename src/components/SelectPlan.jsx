import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import GeneralContext from '../contexts/GeneralContext';

import arcadeImage from '../assests/images/icon-arcade.svg';
import advancedImage from '../assests/images/icon-advanced.svg';
import proImage from '../assests/images/icon-pro.svg';

import '../styles/SelectPlan.scss';
import Toggle from 'react-styled-toggle';

const plans = [
  {
    image: arcadeImage,
    name: 'Arcade',
    price: 9
  },
  {
    image: advancedImage,
    name: 'Advanced',
    price: 12
  },
  {
    image: proImage,
    name: 'Pro',
    price: 15
  }
];

const SelectPlan = () => {
  const { setYourInfo, setPlan, setAddOns } = useContext(GeneralContext);
  const navigate = useNavigate();

  const handleNextButton = () => {
    navigate('/addons');
    setPlan(false);
    setAddOns(true);
  };

  const handleBackButton = () => {
    navigate(-1);
    setYourInfo(true);
    setPlan(false);
  };


  return (
    <div className='every-main-page'>

      <div>

        <div>
          <div className='personal'>Select your plan</div>
          <div className='request'>You have the option of monthly or yearly billing.</div>
        </div>

        <div className='plans'>
          {plans.map((plan, index) => (
            <div key={index} className='individual-plan'>
              <div>
                <img src={plan.image} alt='plan' />
              </div>
              <div>
                <div className='plan-name'>{plan.name}</div>
                <div className='plan-price'>{plan.price}</div>
              </div>
            </div>
          ))}
        </div>
        <div className='switch-toggle'>
          <div style={{ marginRight: '10px' }}>Monthly</div>
          <Toggle
            backgroundColorChecked='darkblue'
            backgroundColorUnchecked='darkblue'
            sliderHeight={15}
            sliderWidth={15}
            height={25}
            width={50}
          />
          <div style={{ marginLeft: '10px' }}>Yearly</div>
        </div>

      </div>

      <div className='back-next-buttons'>
        <button onClick={handleBackButton} className='back-button'>Go Back</button>
        <button onClick={handleNextButton} className='next-step'>Next Step</button>
      </div>

    </div>

  );
};

export default SelectPlan;