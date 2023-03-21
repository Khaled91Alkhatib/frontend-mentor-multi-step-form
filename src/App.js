import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import GeneralContext from './contexts/GeneralContext';
import AddOns from './components/AddOns';
import SelectPlan from './components/SelectPlan';
import SideNav from './components/SideNav';
import Summary from './components/Summary';
import YourInfo from './components/YourInfo';

import './App.css';

const addOns = [
  {
    id: 1,
    title: 'Online service',
    description: 'Access to multiplayer games',
    price: 1,
    isChecked: false
  },
  {
    id: 2,
    title: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    price: 2,
    isChecked: false
  },
  {
    id: 3,
    title: 'Customizable profile',
    description: 'Custom theme on your profile',
    price: 2,
    isChecked: false
  }
];


function App() {
  const [monthly, setMonthly] = useState(true);
  const [yearly, setYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({});
  const [allAddOns, setAllAddOns] = useState(addOns);
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
    const savedState = localStorage.getItem('addOns');
    if (savedState) {
      setAllAddOns(JSON.parse(savedState));
    }
  }, []);


  useEffect(() => {
    localStorage.setItem('myState', JSON.stringify(userInputs));
    localStorage.setItem('plan', JSON.stringify(selectedPlan));
    localStorage.setItem('monthly', JSON.stringify(monthly));
    localStorage.setItem('yearly', JSON.stringify(yearly));
    localStorage.setItem('addOns', JSON.stringify(allAddOns));
  }, [userInputs, selectedPlan, monthly, yearly, allAddOns]);

  return (
    <GeneralContext.Provider value={{ yearly, setYearly, monthly, setMonthly, selectedPlan, setSelectedPlan, allAddOns, setAllAddOns, userInputs, setUserInputs }}>
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
