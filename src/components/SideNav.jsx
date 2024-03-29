import React, { useContext } from 'react';
import GeneralContext from '../contexts/GeneralContext';

import '../styles/SideNav.scss';
import desktopSidebar from '../assests/images/bg-sidebar-desktop.svg';
import mobileSidebar from '../assests/images/bg-sidebar-mobile.svg';

const SideNav = () => {
  const { userInputs } = useContext(GeneralContext);

  return (
    <div className='all-steps'>
      <img className='desktop-sidebar' src={desktopSidebar} alt='sidebar' />
      <img className='mobile-sidebar' src={mobileSidebar} alt='sidebar' />

      <div className='inside-image'>

        <div className='number-to-step'>
          <div className={userInputs.yourInfo ? "active-number" : "number"} >1</div>
          <div className='number-name'>
            <div className='step'>STEP 1</div>
            <div className='name'>YOUR INFO</div>
          </div>
        </div>

        <div className='number-to-step'>
          <div className={userInputs.plan ? "active-number" : "number"}>2</div>
          <div className='number-name'>
            <div className='step'>STEP 2</div>
            <div className='name'>SELECT PLAN</div>
          </div>
        </div>

        <div className='number-to-step'>
          <div className={userInputs.addOns ? "active-number" : "number"}>3</div>
          <div className='number-name'>
            <div className='step'>STEP 3</div>
            <div className='name'>ADD-ONS</div>
          </div>
        </div>

        <div className='number-to-step'>
          <div className={userInputs.summary ? "active-number" : "number"}>4</div>
          <div className='number-name'>
            <div className='step'>STEP 4</div>
            <div className='name'>SUMMARY</div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default SideNav;