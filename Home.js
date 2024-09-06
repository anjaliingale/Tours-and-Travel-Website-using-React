import React from 'react';
import profile from './assets/profile.png'
import {useLocation, useNavigate} from 'react-router-dom';
import Cards from './Cards';
import Cards2 from './Cards2'
import Slider1 from './Slider1';
import Slider2 from './Slider2';
import  './style.css';

function Home (){
  const location=useLocation()

  return (
    <>

      <div className="homepage">
<center><br/>
<br/>
<br/>

  <img src={profile}height={125}width={125}/>
          <h1>Hello! {location.state.id} </h1>
          <br/> <h2>Welcome to Elite Travels</h2>
          <br/>
          </center>
          <hr style={{color:'grey', height:'10px', backgroundColor:'black'}}/>
      </div>
      <div className='fullbody'>
      <Slider1/> 
      <Cards/>
      <Slider2/>
      <Cards2/>
      </div>
      </>
  )
}

export default Home
