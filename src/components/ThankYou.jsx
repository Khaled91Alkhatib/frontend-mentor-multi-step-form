import React from 'react';

import thankYouImage from '../assests/images/icon-thank-you.svg';
import '../styles/ThankYou.scss';

const ThankYou = () => {
  return (


    <div className='every-main-page' style={{ textAlign: 'center' }}>
      <img className='thank-you-image' src={thankYouImage} alt='thankyou' />
      <div className='personal'>Thank you!</div>
      <div className='request'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</div>
    </div>
  );
};

export default ThankYou;