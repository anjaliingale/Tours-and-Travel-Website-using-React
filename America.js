import React from 'react'
import p1 from './assets/Americpac.avif'
import './stylepack.css' 
import Button from "react-bootstrap/Button";
import {useNavigate} from 'react-router-dom';
import { CiCalendarDate,CiLocationArrow1 } from "react-icons/ci";
import { TbWorld } from "react-icons/tb";
import { FaCar } from "react-icons/fa6";
import { FaHotel,FaCcVisa,FaCamera } from "react-icons/fa";
import { MdFlight } from "react-icons/md";
import { GiMeal } from "react-icons/gi";
import Accordion from 'react-bootstrap/Accordion';


const  America= () => {
  const navigate = useNavigate();
  return (
    <>  
        <h2>USA Washington Philadelphia New York</h2>
        <hr/>
        <div className='head'>
        <h2>USA Washington Philadelphia New York</h2>
        <hr/>
        <h4><TbWorld/>1 Countries<CiCalendarDate/>5 Days<CiLocationArrow1/> 3 Cities</h4>
        </div>
        <img className='img' src={p1} alt='imag' fluid   height={500} width={400}/>
        <hr/>
        <div className='container'>
        <div className='tour'>
          <h2>Tour Includes</h2>
          <h4>Hotels<FaHotel/> Visa<FaCcVisa/> Meals<GiMeal/><br/> Transport<FaCar/> Flight<MdFlight/> Sightseeing<FaCamera /></h4>
        </div>
        <div className='keys'>
          <h2>Key Highlights</h2>
            <ul type='square'>
              <li>White House</li>
              <li>Drive through Yorkshire Dales National Park</li>
              <li>Philadelphia Museum of Art</li>
              <li>Enjoy cruise ride on Lake Windermere</li>
              <li>Statue of Liberty and Ellis Island</li>
            </ul>
        </div>
        </div>
        <div>
        <Accordion className='Tourinfo'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Day 1</Accordion.Header>
        <Accordion.Body>
        Mumbai to Mumbai tour guests will report at Chhatrapati Shivaji International Airport, Mumbai as per the scheduled flight departure time and proceed to New York – the most loved city as well as major commercial, financial and cultural centre of the world, also known as Big Apple. Upon arrival Veena World Tour Manager will guide all guests for airport formalities and proceed to the Philadelphia.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">

        <Accordion.Header>Day 2</Accordion.Header>
        <Accordion.Body>
        Today we explore Philadelphia, we see Philadelphia City Hall, Independence Hall and Liberty Bell building. Later we drive on the famous Benjamin Franklin Parkway – a scenic boulevard known as Champs-Élysées of Philadelphia. It also has an international flavour by being lined with flags of countries from around the world, it’s fun to spot our Indian national flag. Its time to see the Rocky Statue and the Rocky Steps and click an iconic picture. Later we proceed to Washington DC – The Capital city of world’s number one Superpower nation USA.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Day 3</Accordion.Header>
        <Accordion.Body>
        Today we explore Washington DC, we see Capitol Hill, take a photo stop at the backdrop of White House – official residence of the president of the United States of America. Later we visit Lincoln Memorial – built to honour the 16th president of the United States, Abraham Lincoln. It is also an important symbol of the American Civil Rights Movement and Martin Luther King Jr’s famous speech ‘I have a Dream’. Then we pass by Washington Monument – The Obelisk. Later we visit Smithsonian Air and Space Museum with its twenty-three galleries exhibiting hundreds of aircraft, spacecraft, missiles, rockets, Wright brother’s first flight and you have an opportunity to touch the Moon Rock – Presented by Apollo 11, 1969 Crew along with Mr Neil Armstrong – The first person to walk on the Moon.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Day 4</Accordion.Header>
        <Accordion.Body>
        Today we proceed to New York – the most loved city as well as major commercial, financial and cultural centre of the world, also known as Big Apple. En-route we visit Hershey’s Chocolate World – One of the largest manufactures of chocolate in the world. Enjoy Hershey’s Chocolate Tour and buy famous Hershey’s Kisses and other popular chocolates.      </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Day 5</Accordion.Header>
        <Accordion.Body>
        Today we take a ferry ride to Liberty Island to see the Statue of Liberty – a colossal neoclassical sculpture on Liberty Island in New York Harbour. This copper statue was a gift of friendship from the people of France to the people of the United States. It is recognized as a universal symbol of freedom and democracy. This statue was designed by French sculptor Frédéric Bartholdi and its metal framework by Gustave Eiffel. Take the perfect photo of the statue. Afterwards we explore New York City, we see the Charging Bull – Symbol of the American Stock Market, 9/11 Memorial – a national tribute to honour the lives lost in September 11, 2001 attacks on Twin Towers and visit the Observatory deck of One World Trade Center – the tallest skyscraper in the Western Hemisphere that gives panoramic views of New York City. </Accordion.Body>      
        </Accordion.Item>
    </Accordion>
    
    </div>
    <center>
    <Button variant="primary" onClick={()=>navigate("/pay")}>Buy Now!</Button> 
    </center>
    <br/>
    </>
  )
}

export default America;