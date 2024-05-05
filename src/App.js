import './App.css';
import { Route, Routes } from 'react-router-dom';


import OrderView from './components/OrderView';
import FeedbackView from './components/FeedbackView';
import DataviewA from './components/DataviewA';
import Navbarnew2 from './components/Navbarnew2';
import Nav from './components/Nav';
import AdminLogin from './components/AdminLogin';
import Cardadd from './components/Cardadd';
import AddFoodOffer from './components/AddFoodOffer';
import ManageFoodOffers from './components/ManageFoodOrder';
import OrderView1 from './components/OrderView1';


function App() {
  return (
    <div className="App">
      {/* <OrderView1/> */}
    {/* <AddFoodOffer/> */}
    {/* <ManageFoodOffers/> */}
      <Routes>
        <Route path='/' element={<><Navbarnew2/></>}/>
        <Route path='/Navbarnew2' element={<></>}/>
        <Route path='/AddFoodOffer' element={<><AddFoodOffer/></>}/>
        <Route path='/Cardadd' element={<><Cardadd/></>}/>
        <Route path='/ManageFoodOffers' element={<><ManageFoodOffers/></>}/>
        <Route path='/OrderView' element={<><OrderView/></>}/>
        <Route path='/OrderView1' element={<><OrderView1/></>}/>
        <Route path='/DataviewA' element={<><DataviewA/></>}/>
        <Route path='/FeedbackView' element={<><FeedbackView/></>}/>
        {/* <Route path="/orders" element={<OrderView />} /> */}
        {/* <Route path='/Login0' element={<><AdminLogin/></>}/> */}
      </Routes>
      {/* <Cardadd/> */}
      {/* <DataviewA/> */}
      {/* <OrderView/> */}
      {/* <FeedbackView/> */}
    </div>
  );
}

export default App;
