import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import GeneralContext from './contexts/GeneralContext';
import AddOns from './components/AddOns';
import SelectPlan from './components/SelectPlan';
import SideNav from './components/SideNav';
import Summary from './components/Summary';
import YourInfo from './components/YourInfo';

import './App.css';

function App() {
  const [yourInfo, setYourInfo] = useState(true);
  const [plan, setPlan] = useState(false);
  const [addOns, setAddOns] = useState(false);
  const [summary, setSummary] = useState(false);
  const [monthly, setMonthly] = useState(true);
  const [yearly, setYearly] = useState(false);

  const [userInputs, setUserInputs] = useState({
    name: "",
    email: "",
    phone: ""
  });


  useEffect(() => {
    const newInfo = localStorage.getItem('personal-info');
    if (newInfo !== null) {
      setYourInfo(JSON.parse(newInfo));
    }
  }, []);

  useEffect(() => {
    const newPlan = localStorage.getItem('plan');
    if (newPlan !== null) {
      setPlan(JSON.parse(newPlan));
    }
  }, []);

  useEffect(() => {
    const savedInputs = JSON.parse(localStorage.getItem("userInputs"));
    if (savedInputs) {
      setUserInputs(savedInputs);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('personal-info', JSON.stringify(yourInfo));
    localStorage.setItem('plan', JSON.stringify(plan));
    localStorage.setItem('userInputs', JSON.stringify(userInputs));
  }, [yourInfo, plan, userInputs]);

  return (
    <GeneralContext.Provider value={{ yourInfo, setYourInfo, plan, setPlan, addOns, setAddOns, summary, setSummary, yearly, setYearly, monthly, setMonthly, userInputs, setUserInputs }}>
      <div className='overall-app'>
        <SideNav />
        <Routes>
          <Route path='/' element={<YourInfo />} />
          <Route path='/selectplan' element={<SelectPlan />} />
          <Route path='/addons' element={<AddOns />} />
          <Route path='/summary' element={<Summary />} />
        </Routes>
      </div>
    </GeneralContext.Provider>
  );
}

export default App;
