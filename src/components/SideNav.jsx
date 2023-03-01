import React from 'react';

import '../styles/SideNav.scss';
import desktopSidebar from '../assests/images/bg-sidebar-desktop.svg';

const SideNav = () => {
  return (
    <div className='all-steps'>
      <img src={desktopSidebar} alt='sidebar' />

      <div className='inside-image'>

        <div className='number-to-step'>
          <div className='number'>1</div>
          <div className='number-name'>
            <div className='step'>STEP 1</div>
            <div className='name'>YOUR INFO</div>
          </div>
        </div>

        <div className='number-to-step'>
          <div className='number'>2</div>
          <div className='number-name'>
            <div className='step'>STEP 2</div>
            <div className='name'>Select PLAN</div>
          </div>
        </div>

        <div className='number-to-step'>
          <div className='number'>3</div>
          <div className='number-name'>
            <div className='step'>STEP 3</div>
            <div className='name'>ADD-ONS</div>
          </div>
        </div>

        <div className='number-to-step'>
          <div className='number'>4</div>
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