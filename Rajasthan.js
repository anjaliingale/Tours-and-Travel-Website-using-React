import React from 'react'
import p3 from './assets/rajasthan_cover.webp'
import './stylepack.css'
import { CiCalendarDate,CiLocationArrow1 } from "react-icons/ci";
import { TbWorld } from "react-icons/tb";
import { FaCar } from "react-icons/fa6";
import { FaHotel,FaCcVisa,FaCamera } from "react-icons/fa";
import { MdFlight } from "react-icons/md";
import { GiMeal } from "react-icons/gi";
import Accordion from 'react-bootstrap/Accordion';
import Button from "react-bootstrap/Button";
import {useNavigate} from 'react-router-dom';


const  Rajasthan= () => {
  const navigate = useNavigate();

  return (
    <>  
        <h2>Rajasthan Tour Packages</h2>
        <hr/>
        <div className='head'>
        <h2>Rajasthan Tour Packages</h2>
        <h4><TbWorld/>1 Countries<CiCalendarDate/>5 Days<CiLocationArrow1/> 3 Cities</h4>
        </div>
        <img className='img' src={p3} alt='imag' fluid  height={500} width={400}/>
        <hr/>
        <div className='container'>
        <div className='tour'>
          <h2>Tour Includes</h2>
          <h4>Hotels<FaHotel/> Visa<FaCcVisa/> Meals<GiMeal/><br/> Transport<FaCar/> Flight<MdFlight/> Sightseeing<FaCamera /></h4>
        </div>
        <div className='keys'>
          <h2>Key Highlights</h2>
            <ul type='square'>
              <li>Hawa Mahal</li>
              <li>Umaid Bhawan Palace</li>
              <li>Jantar Mantar</li>
              <li>Sam Sand Dunes and Camel Fair (seasonal)</li>
              <li>Jaisalmer Fort</li>
            </ul>
        </div>
        </div>
        <div>
        <Accordion className='Tourinfo'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Day 1</Accordion.Header>
        <Accordion.Body>
        Tour guests will arrive at Jaipur Airport as per their scheduled flight. Upon arrival they will meet Veena World tour manager at the airport and proceed to the city.
Later we visit City Palace – the royal residence, known for its architectural blend of Indian, Mughal, Rajput and European styles. Followed by visit to Jantar Mantar – A UNESCO World Heritage site also an astronomical marvel.
In the evening we witness a beautiful Sound & Light Show at Amer fort. We then have a short Meet & Greet session.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Day 2</Accordion.Header>
        <Accordion.Body>
        Today we explore the City of Jaipur. We visit Amer Fort – known for its Mughal influenced artistic style, Panna Meena ka Kund and Hawa Mahal – the palace of winds. Later we have free time for shopping at Bapu Market.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Day 3</Accordion.Header>
        <Accordion.Body>
        Today we proceed to Pushkar – one of the oldest cities with heritage, culture, and warmth rolled into one panoramic landscape. En route we visit Kishangarh – Kashmir of Rajasthan. Upon arrival at Pushkar we visit Brahma Mandir – one of very few existing temples dedicated to god Brahma, Pushkar Tirth and witness the divine evening aarti at Pushkar Ghat.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Day 4</Accordion.Header>
        <Accordion.Body>
        Today we proceed to Chittorgarh. We visit Chittorgarh Fort – a UNESCO World Heritage Site and a symbol of bravery. Here we will see Ranakumbha Palace – where founder of Udaipur Maharana Udai Singh was born, Meera Mandir – was once the home of famous bhakti poetess Meerabai, Vijay Stambha – victory monument constructed by Mewar king to commemorate victory over Mahmud Khilji and Queen Padmini’s Palace – located amidst water bodies. Today you have a chance to get yourself clicked in Rajasthani outfit. Later we proceed to Udaipur.      </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Day 5</Accordion.Header>
        <Accordion.Body>
        Today morning we visit Moti Magri – also known as Pearl hill which overlooks the Fateh Sagar Lake. It’s time to explore Udaipur city, we visit City palace – an architectural marvel. Then we enjoy boat ride to Jag Mandir – palace built on island in Lake Pichola. Later we have free time for shopping. In the evening we enjoy a traditional music and dance show.</Accordion.Body>      
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

export default Rajasthan;