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
  const [monthly, setMonthly] = useState(true);
  const [yearly, setYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({});
  const [userInputs, setUserInputs] = useState({
    yourInfo: true,
    plan: false,
    addOns: false,
    summary: false,
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const savedState = localStorage.getItem('myState');
    if (savedState) {
      setUserInputs(JSON.parse(savedState));
    }
  }, []);

  useEffect(() => {
    const savedState = localStorage.getItem('plan');
    if (savedState) {
      setSelectedPlan(JSON.parse(savedState));
    }
  }, []);

  useEffect(() => {
    const savedState = localStorage.getItem('monthly');
    if (savedState) {
      setMonthly(JSON.parse(savedState));
    }
  }, []);

  useEffect(() => {
    const savedState = localStorage.getItem('yearly');
    if (savedState) {
      setYearly(JSON.parse(savedState));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('myState', JSON.stringify(userInputs));
    localStorage.setItem('plan', JSON.stringify(selectedPlan));
    localStorage.setItem('monthly', JSON.stringify(monthly));
    localStorage.setItem('yearly', JSON.stringify(yearly));

  }, [userInputs, selectedPlan, monthly, yearly]);

  return (
    <GeneralContext.Provider value={{ yearly, setYearly, monthly, setMonthly, selectedPlan, setSelectedPlan, userInputs, setUserInputs }}>
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
