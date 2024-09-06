import React from 'react'
import p4 from './assets/jkpack.jpg'
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


const  JK= () => {
  const navigate = useNavigate();

  return (
    <>  
        <h2>Jammu and Kashmir Tour Packages</h2>
        <hr/>
        <div className='head'>
        <h2>Jammu and Kashmir Tour Packages</h2>
        <h4><TbWorld/>1 Countries<CiCalendarDate/>5 Days<CiLocationArrow1/> 3 Cities</h4>
        </div>
        <img className='img' src={p4} alt='imag' fluid  height={500} width={400}/>
        <hr/>
        <div className='container'>
        <div className='tour'>
          <h2>Tour Includes</h2>
          <h4>Hotels<FaHotel/> Visa<FaCcVisa/> Meals<GiMeal/><br/> Transport<FaCar/> Flight<MdFlight/> Sightseeing<FaCamera /></h4>
        </div>
        <div className='keys'>
          <h2>Key Highlights</h2>
            <ul type='square'>
              <li>Vaishno Devi Temple</li>
              <li>Gulmarg</li>
              <li>Dal Lake and Shikara Ride</li>
              <li>Shalimar Bagh and Nishat Bagh</li>
              <li>Jama Masjid</li>
            </ul>
        </div>
        </div>
        <div>
        <Accordion className='Tourinfo'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Day 1</Accordion.Header>
        <Accordion.Body>
        Tour Guests will arrive at Srinagar Airport as per their Scheduled flight. Upon arrival they will meet Veena World tour manager at the airport and proceed to hotel.
Today we experience a stay at the floating boats, famously known as Kashmiri Houseboats which are designed with the local interiors.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Day 2</Accordion.Header>
        <Accordion.Body>
        Today we proceed to Pahalgam. En-route we view the Saffron fields at Pampore followed by a visit to Avantipur ruins. Upon arrival we have time to stroll at the Mall road of Pahalgam. In the evening we enjoy a short Meet & Greet session.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Day 3</Accordion.Header>
        <Accordion.Body>
        Today we enjoy a Walk & Click tour of Betaab valley. Later we spend some time playing in the snow at Chandawari. Further we proceed back to Srinagar en-route we visit Kashmiri Cricket Bat Factory and take a photo stop at Apple Valley and Walnut Plantations
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Day 4</Accordion.Header>
        <Accordion.Body>
        Today we enjoy an excursion to Gulmarg - 'Meadow of Flowers'. We enjoy the famous Gondola ride (one of the highest in the world) to the second phase Apharwat point.
We later enjoy, play and have fun time in Snow, also one can take up skiing and snowboarding activities (at own cost). After coming back to Srinagar, we have free time for Shopping.
In the evening we enjoy a get together with our travel companions.     </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Day 5</Accordion.Header>
        <Accordion.Body>
        Today we enjoy a small Trek to Shankaracharya Hill followed by the iconic Shikara ride at Dal Lake. Later visit Nehru Park and click photographs in colourful Kashmiri outfits (at own cost). Further we enjoy Speed boat ride in Dal Lake. In the evening we visit Kashmiri gardens – Shalimar & Nishat Bagh. (Note: During the Tulip season, we will visit the Tulip Garden, as an additional sightseeing in our itinerary.)</Accordion.Body>      
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

export default JK;