import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import GeneralContext from '../contexts/GeneralContext';

import '../styles/YourInfo.scss';

const YourInfo = () => {
  const { setYourInfo, setPlan } = useContext(GeneralContext);
  const navigate = useNavigate();

  const handleNextButton = () => {
    navigate('/selectplan');
    setPlan(true);
    setYourInfo(false);
  };

  return (
    <div className='every-main-page'>
      <div>
        <div className='personal'>Personal info</div>
        <div className='request'>Please provide your name, email address and phone number.</div>
        <div className='info-input-title'>
          <label className='info-title'>Name</label>
          <input className='info-input' type='text' placeholder='e.g. Stephen King' />
        </div>
        <div className='info-input-title'>
          <label className='info-title'>Email Address</label>
          <input className='info-input' type='email' placeholder='e.g. stephenking@email.com' />
        </div>
        <div className='info-input-title'>
          <label className='info-title'>Phone Number</label>
          <input className='info-input' type='number' placeholder='e.g. +1 123 456 7890' />
        </div>
      </div>

      <button onClick={handleNextButton} className='next-step'>Next Step</button>

    </div>
  );
};

export default YourInfo;