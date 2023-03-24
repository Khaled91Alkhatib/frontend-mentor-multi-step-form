import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import GeneralContext from '../contexts/GeneralContext';

import '../styles/AddOns.scss';

const AddOns = () => {
  const { setUserInputs, monthly, allAddOns, setAllAddOns } = useContext(GeneralContext);
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

  function handleCheckbox(itemId) {
    const updatedItems = allAddOns.map(addOn => {
      if (addOn.id === itemId) {
        return { ...addOn, isChecked: !addOn.isChecked };
      } else {
        return addOn;
      }
    });
    setAllAddOns(updatedItems);
  }

  // console.log(allAddOns);
  return (
    <div className='every-main-page'>

      <div>

        <div>
          <div className='personal'>Pick add-ons</div>
          <div className='request'>Add-ons help enhance your gaming experience.</div>
        </div>

        <div>
          {allAddOns.map((addOn => (
            <div key={addOn.id} className={`main-addons ${addOn.isChecked ? 'selected-addon' : ''}`}>

              <div className='single-addons'>
                <input checked={addOn.isChecked} style={{ marginRight: '1.5em' }} type='checkbox' onChange={() => handleCheckbox(addOn.id)} />
                <div>
                  <div className='segment-name'>{addOn.title}</div>
                  <div className='segment-price'>{addOn.description}</div>
                </div>
              </div>

              <div className='addon-price'>+${monthly ? addOn.price : addOn.price * 10}{monthly ? "/mo" : "/yr"}</div>

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