import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import thankYouImage from '../assests/images/icon-thank-you.svg';
import GeneralContext from '../contexts/GeneralContext';
import '../styles/ThankYou.scss';

const ThankYou = () => {
  const navigate = useNavigate();
  const { setUserInputs, setMonthly, setYearly, setSelectedPlan } = useContext(GeneralContext);

  const handleMainPage = () => {

    navigate('/');
    setUserInputs({
      yourInfo: true,
      plan: false,
      addOns: false,
      summary: false,
      name: "",
      email: "",
      phone: "",
    });
    setMonthly(true);
    setYearly(false);
    setSelectedPlan({});

  };

  return (


    <div className='every-main-page' style={{ textAlign: 'center' }}>
      <img className='thank-you-image' src={thankYouImage} alt='thankyou' />
      <div className='personal'>Thank you!</div>
      <div className='request'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</div>
      <button className='main-page-button' onClick={handleMainPage}>Main Page</button>
    </div>
  );
};

export default ThankYou;