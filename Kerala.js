import React from 'react'
import keralapack from './assets/keralapack.jpg'
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


const  Kerala= () => {
  const navigate = useNavigate();

  return (
    <>  
        <h2>Highlights of Kerala</h2>
        <hr/>
        <div className='head'>
        <h2>Highlights of Kerala</h2>
        <h4><TbWorld/>1 Countries<CiCalendarDate/>5 Days<CiLocationArrow1/> 4 Cities</h4>
        </div>
        <img className='img' src={keralapack} alt='imag' height={500} width={400}fluid/>
        <hr/>
        <div className='container'>
        <div className='tour'>
          <h2>Tour Includes</h2>
          <h4>Hotels<FaHotel/> Visa<FaCcVisa/> Meals<GiMeal/><br/> Transport<FaCar/> Flight<MdFlight/> Sightseeing<FaCamera /></h4>
        </div>
        <div className='keys'>
          <h2>Key Highlights</h2>
            <ul type='square'>
              <li>Backwaters of Alleppey</li>
              <li>Kumarakom Bird Sanctuary</li>
              <li>Periyar National Park</li>
              <li>Kovalam Beach</li>
              <li>Athirapally Waterfalls</li>
            </ul>
        </div>
        </div>
        <div>
        <Accordion className='Tourinfo'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Day 1</Accordion.Header>
        <Accordion.Body>
        Tour Guests will arrive at Cochin Airport as per their Scheduled flight. Upon arrival in the evening they will meet Veena World tour manager at the airport and proceed to Alleppey – known as ‘the Venice of the East’. Today we have a short Meet & Greet session.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Day 2</Accordion.Header>
        <Accordion.Body>
        Today we proceed to Periyar. En route we enjoy the famous Kerala Backwaters ride and admire the scenic sites of lush paddy fields and coconut trees as we sail. Upon arrival in Periyar, we have free time for shopping at Kumily Spice Village. In the evening, we enjoy Kathakali show.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Day 3</Accordion.Header>
        <Accordion.Body>
        Today we visit Periyar Wildlife Sanctuary - one of the popular national parks in India and famous as an elephant and tiger reserve. It is home to around 35 species of mammals like tiger, Indian elephant, gaur, sambar, wild pig, Indian giant squirrel, jungle cat, etc. We explore this wildlife sanctuary by sailing in the Periyar Lake. Later we proceed to Munnar – Munnar is well known for its lush green hills and tea plantations.
Please Note: Periyar Boat Ride is subject to Availability. In case of non-availability, alternative sightseeing will be provided.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Day 4</Accordion.Header>
        <Accordion.Body>
        Today we enjoy speed boat ride at Mattupetty Dam near Sunmoon Valley, followed by a visit to Echo Point and Eravikulam (Rajamalai) National Park (subject to security permission).      </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Day 5</Accordion.Header>
        <Accordion.Body>
        Today we proceed to Cochin – Popularly known as the Queen of Arabian Sea. Upon arrival we visit Chinese Fishing Nets and St. Francis Church at Fort Kochi - one of the oldest European churches in India which has great historical significance. Later we proceed to Muttancherry, here we visit the Jewish Synagogue - oldest active synagogue in the Commonwealth of Nations, Dutch Palace - one of the finest examples of the Kerala style of architecture.</Accordion.Body>
        </Accordion.Item>
    </Accordion>
    
    </div>
    <center>

      <h4>Price:₹65000</h4><br/>
    <Button variant="primary" onClick={()=>navigate("/pay")}>Buy Now!</Button> 
    </center>
    <br/>
    </>
  )
}

export default Kerala;