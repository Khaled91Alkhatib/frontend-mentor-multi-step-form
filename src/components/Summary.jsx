import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import GeneralContext from '../contexts/GeneralContext';

import "../styles/Summary.scss";

const Summary = () => {
  const { selectedPlan, monthly, setUserInputs, allAddOns } = useContext(GeneralContext);
  // console.log(selectedPlan);
  // console.log(allAddOns);

  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate(-1);
    setUserInputs(prev => ({
      ...prev,
      addOns: !prev.addOns,
      summary: !prev.summary
    }));
  };

  const handleChangeButton = () => {
    navigate('/selectplan');
    setUserInputs(prev => ({
      ...prev,
      plan: !prev.plan,
      summary: !prev.summary
    }));
  };

  const selectedItems = allAddOns.filter(addOn => addOn.isChecked);
  // console.log(selectedItems);

  const totalPrice = selectedItems.reduce((total, selectedItem) => {
    return total + (monthly ? selectedItem.price : selectedItem.price * 10);
  }, selectedPlan.price);

  const handleConfirm = () => {
    navigate('/thankyou')
  }

  return (
    <div className='every-main-page'>

      <div>
        <div className='personal'>Finishing up</div>
        <div className='request'>Double-check everything looks OK before confirming.</div>
      </div>

      <div>

        <div className='plan-addons'>

          <div className='inner-details'>
            <div className='plan-addon-price'>
              <div className='selected-plan'>{selectedPlan.name} {monthly ? "(Monthly)" : "(Yearly)"}</div>
              <div className='selected-price'>${selectedPlan.price}{monthly ? "/mo" : "/yr"}</div>
            </div>
            <button onClick={handleChangeButton} className='change-button'>Change</button>
            <div className='vertical-line'></div>
            {selectedItems.length > 0 ?
              selectedItems.map(selectedItem => (
                <div className='addons' key={selectedItem.id}>
                  <div>{selectedItem.title}</div>
                  <div className='selected-addon-price'>+${monthly ? selectedItem.price : selectedItem.price * 10}{monthly ? "/mo" : "/yr"}</div>
                </div>
              ))
              :
              <div className='addons'>No Addons selected!</div>
            }
          </div>

          <div className='total-price'>
            <div>Total {monthly ? "(per month)" : "(per year)"}</div>
            <div className='total-price-amount'>+${totalPrice}{monthly ? "/mo" : "/yr"}</div>
          </div>
        </div>

      </div>

      <div className='back-next-buttons'>
        <button onClick={handleBackButton} className='back-button'>Go Back</button>
        <button onClick={handleConfirm} className='next-step' style={{backgroundColor:'blue'}}>Confirm</button>
      </div>

    </div>
  );
};

export default Summary;