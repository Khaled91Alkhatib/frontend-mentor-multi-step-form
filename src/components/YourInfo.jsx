import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GeneralContext from '../contexts/GeneralContext';

import '../styles/YourInfo.scss';

const YourInfo = () => {
  const { userInputs, setUserInputs } = useContext(GeneralContext);
  // console.log(userInputs, "yourinfo");
  const navigate = useNavigate();
  const [nameMsg, setNameMsg] = useState('info-error-style name-hidden');
  const [emailMsg, setEmailMsg] = useState('info-error-style email-hidden');
  const [phoneMsg, setPhoneMsg] = useState('info-error-style phone-hidden');

  const handleNextButton = (e) => {
    e.preventDefault();

    if (!userInputs.name.trim()) {
      setNameMsg('info-error-style name-show');
    }
    if (!userInputs.email.trim()) {
      setEmailMsg('info-error-style email-show');
    }
    if (!userInputs.phone.trim()) {
      setPhoneMsg('info-error-style phone-show');
    }
    if (userInputs.name.trim() && userInputs.email.trim() && userInputs.phone.trim()) {
      navigate('/selectplan');
      setUserInputs(prev => ({
        ...prev,
        yourInfo: !prev.yourInfo,
        plan: !prev.plan
      }));
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInputs((prevState) => ({ ...prevState, [name]: value }));
    if (name === 'name') {
      setNameMsg(`name-hidden`);
    }
    if (name === 'email') {
      setEmailMsg(`email-hidden`);
    }
    if (name === 'phone') {
      setPhoneMsg(`phone-hidden`);
    }
  };

  return (
    <div className='every-main-page'>
      <div>
        <div className='personal'>Personal info</div>
        <div className='request'>Please provide your name, email address and phone number.</div>
        <form onSubmit={handleNextButton}>
          <div className='info-input-title'>
            <label className='info-title'>Name</label>
            <input name='name' value={userInputs.name} onChange={handleInputChange} className='info-input' type='text' placeholder='e.g. Stephen King' />
            <div className={nameMsg}>Please Write Your Name!</div>
          </div>
          <div className='info-input-title'>
            <label className='info-title'>Email Address</label>
            <input name='email' value={userInputs.email} onChange={handleInputChange} className='info-input' type='email' placeholder='e.g. stephenking@email.com' />
            <div className={emailMsg}>Please Include Your Email Address!</div>
          </div>
          <div className='info-input-title'>
            <label className='info-title'>Phone Number</label>
            <input name='phone' value={userInputs.phone} onChange={handleInputChange} className='info-input' type='number' placeholder='e.g. +1 123 456 7890' />
            <div className={phoneMsg}>Please Include Your Phone Number!</div>
          </div>
          <button type='submit' className='next-step'>Next Step</button>
        </form>
      </div>


    </div>
  );
};

export default YourInfo;