import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import GeneralContext from '../contexts/GeneralContext';

import '../styles/AddOns.scss';

const addOns = [
  {
    id: 1,
    title: 'Online service',
    description: 'Access to multiplayer games',
    price: 1
  },
  {
    id: 2,
    title: 'Larger storage',
    description: 'Extra 1TB od cloud save',
    price: 2
  },
  {
    id: 3,
    title: 'Customizable profile',
    description: 'Custom theme on your profile',
    price: 2
  }
];

const AddOns = () => {
  const { setUserInputs } = useContext(GeneralContext);
  // console.log(userInputs, "addons");

  const navigate = useNavigate();

  const handleNextButton = () => {
    navigate('/summary');
    setUserInputs(prev => ({
      ...prev,
      addOns: !prev.addOns,
      summary: !prev.summary
    }));
  };

  const handleBackButton = () => {
    navigate(-1);
    setUserInputs(prev => ({
      ...prev,
      plan: !prev.plan,
      addOns: !prev.addOns
    }));
  };

  return (
    <div className='every-main-page'>

      <div>

        <div>
          <div className='personal'>Pick add-ons</div>
          <div className='request'>Add-ons help enhance your gaming experience.</div>
        </div>

        <div>
          {addOns.map((addOn => (
            <div key={addOn.id} className='main-addons'>


              <div style={{ display: 'flex' }}>
                <input style={{ marginRight: '1.5em' }} type='checkbox' />
                <div>
                  <div className='segment-name'>{addOn.title}</div>
                  <div className='segment-price'>{addOn.description}</div>
                </div>
              </div>

              <div className='addon-price'>{addOn.price}</div>

            </div>
          )))}
        </div>

      </div>

      <div className='back-next-buttons'>
        <button onClick={handleBackButton} className='back-button'>Go Back</button>
        <button onClick={handleNextButton} className='next-step'>Next Step</button>
      </div>

    </div>

  );
};

export default AddOns;