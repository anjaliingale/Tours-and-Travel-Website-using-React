import React from 'react'
import Home from './Home'
import Navbar1 from './Navbar1';
import './style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer1 from './Footer1';
import Contact from './Contact';
import About from './About';
import Registration from './Registration';
import Login from './LogIn';
import Kerala from './Kerala';
import JK from './JK';
import America from './America'
import Auss from './Auss'
import Rajasthan from './Rajasthan';
import Europe from './Europe'
import Xyz from './Xyz'
import Payment from './Payment';


const App=()=> {
  return (
    <>
    <BrowserRouter>
    <Navbar1/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/> 
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/signUp" element={<Registration/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/kerala" element={<Kerala/>}/>
        <Route path="/rajasthan" element={<Rajasthan/>}/>
        <Route path="/jk" element={<JK/>}/>
        <Route path="/america" element={<America/>}/>
        <Route path="/europe" element={<Europe/>}/>
        <Route path="/auss" element={<Auss/>}/>
        <Route path="/pay" element={<Payment/>}/>
        <Route path="/xyz" element={<Xyz/>}/>

      </Routes>
    </BrowserRouter>
    
    
    <Footer1/>
    </>

  );
}

export default App;
