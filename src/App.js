import React, { useState } from 'react';
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

  return (
    <GeneralContext.Provider value={{ yourInfo, setYourInfo, plan, setPlan, addOns, setAddOns, summary, setSummary }}>
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
