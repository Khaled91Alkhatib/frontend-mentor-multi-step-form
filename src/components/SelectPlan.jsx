import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GeneralContext from '../contexts/GeneralContext';

import arcadeImage from '../assests/images/icon-arcade.svg';
import advancedImage from '../assests/images/icon-advanced.svg';
import proImage from '../assests/images/icon-pro.svg';

import '../styles/SelectPlan.scss';
import Toggle from 'react-styled-toggle';

const plans = [
  {
    id: 1,
    image: arcadeImage,
    name: 'Arcade',
    price: 9
  },
  {
    id: 2,
    image: advancedImage,
    name: 'Advanced',
    price: 12
  },
  {
    id: 3,
    image: proImage,
    name: 'Pro',
    price: 15
  }
];

const SelectPlan = () => {
  const { setMonthly, setYearly, monthly, selectedPlan, setSelectedPlan, yearly, setUserInputs } = useContext(GeneralContext);
  const [emailMsg, setEmailMsg] = useState('plan-error-style plan-hidden');

  const navigate = useNavigate();

  const handleNextButton = () => {
    if (!selectedPlan.id) {
      setEmailMsg('plan-error-style plan-shown');
    } else {
      navigate('/addons');
      setUserInputs(prev => ({
        ...prev,
        plan: !prev.plan,
        addOns: !prev.addOns
      }));
    }
  };

  const handleBackButton = () => {
    navigate('/');
    setUserInputs(prev => ({
      ...prev,
      yourInfo: !prev.yourInfo,
      plan: !prev.plan
    }));
  };

  const handleItemClick = (selectedPlan) => {

    if (monthly) {
      const newSelectedPlan = {
        id: selectedPlan.id,
        name: selectedPlan.name,
        price: selectedPlan.price,
      };
      setSelectedPlan(newSelectedPlan);
      setEmailMsg('plan-error-style plan-hidden');
    } else {
      const newSelectedPlan = {
        id: selectedPlan.id,
        name: selectedPlan.name,
        price: selectedPlan.price * 10,
      };
      setSelectedPlan(newSelectedPlan);
      setEmailMsg('plan-error-style plan-hidden');
    }
  };
  // console.log(selectedPlan);

  const handlePlanType = () => {
    if (monthly === true) {
      setMonthly(false);
      setYearly(true);
      setSelectedPlan({});
    } else if (monthly === false) {
      setMonthly(true);
      setYearly(false);
      setSelectedPlan({});
    }
  };

  return (
    <div className='every-main-page mobile-plan-page'>

      <div>

        <div>
          <div className='personal'>Select your plan</div>
          <div className='request'>You have the option of monthly or yearly billing.</div>
        </div>
        <div className='plans'>
          {plans.map((plan) => (
            <div key={plan.id} className={plan.id === selectedPlan.id ? 'individual-plan active-individual-plan' : 'individual-plan inactive-individual-plan'} onClick={() => handleItemClick(plan)}>
              <div>
                <img className='margin-mobile' src={plan.image} alt='plan' />
              </div>
              <div>
                <div className='segment-name'>{plan.name}</div>
                <div className='segment-price'>
                  ${monthly ? plan.price : plan.price * 10}
                  {monthly ? '/mo' : '/yr'}
                </div>
                <div className='free-months'>
                  {yearly ? '2 months free' : ""}
                </div>
              </div>
            </div>
          ))}

        </div>
        <div className={emailMsg}>Please choose a plan!</div>
        <div className='switch-toggle'>
          <div className={monthly === true ? "plan-type active-plan monthly" : "plan-type inactive-plan monthly"}>Monthly</div>
          <Toggle
            backgroundColorChecked='darkblue'
            backgroundColorUnchecked='darkblue'
            sliderHeight={15}
            sliderWidth={15}
            height={25}
            width={50}
            onChange={handlePlanType}
          />
          <div className={yearly === true ? "plan-type active-plan yearly" : "plan-type inactive-plan yearly"}>Yearly</div>
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