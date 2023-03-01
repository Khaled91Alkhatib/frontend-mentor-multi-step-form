import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddOns from './components/AddOns';
import SelectPlan from './components/SelectPlan';
import SideNav from './components/SideNav';
import Summary from './components/Summary';
import YourInfo from './components/YourInfo';

function App() {
  return (
    <div className='overall-app'>
      <SideNav />
      <Routes>
        <Route path='/' element={<YourInfo />} />
        <Route path='/selectplan' element={<SelectPlan />} />
        <Route path='addons' element={<AddOns />} />
        <Route path='summary' element={<Summary />} />
      </Routes>
    </div>
  );
}

export default App;
