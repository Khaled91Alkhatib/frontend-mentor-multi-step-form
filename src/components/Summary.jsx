import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import GeneralContext from '../contexts/GeneralContext';

import "../styles/Summary.scss";

const Summary = () => {
  const { selectedPlan, monthly, setUserInputs } = useContext(GeneralContext);
  console.log(selectedPlan);

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


  return (
    <div className='every-main-page'>

      <div>
        <div className='personal'>Finishing up</div>
        <div className='request'>Double-check everything looks OK before confirming.</div>
      </div>

      <div>

        <div className='plan-addons'>
          <div className='plan-addon-price'>
            <div className='selected-plan'>{selectedPlan.name} {monthly ? "(Monthly)" : "(Yearly)"}</div>
            <div className='selected-price'>${selectedPlan.price}{monthly ? "/mo" : "/yr"}</div>
          </div>
          <button onClick={handleChangeButton} className='change-button'>Change</button>
          <div className='vertical-line'></div>
        </div>

      </div>

      <div className='back-next-buttons'>
        <button onClick={handleBackButton} className='back-button'>Go Back</button>
        <button className='next-step'>Confirm</button>
      </div>

    </div>
  );
};

export default Summary;