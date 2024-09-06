import React from 'react'
import p5 from './assets/Australialpack.jpg'
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


const  Auss=()=> {
  const navigate = useNavigate();

  return (
    <>  
        <h2>Australia Sydney Canberra Melbourne</h2>
        <hr/>
        <div className='head'>
        <h2>Australia Sydney Canberra Melbourne</h2>
        <h4><TbWorld/>1 Countries<CiCalendarDate/>5 Days<CiLocationArrow1/> 4 Cities</h4>
        </div>
        <img className='img' src={p5} alt='imag' fluid height={500} width={400} />
        <hr/>
        <div className='container'>
        <div className='tour'>
          <h2>Tour Includes</h2>
          <h4>Hotels<FaHotel/> Visa<FaCcVisa/> Meals<GiMeal/><br/> Transport<FaCar/> Flight<MdFlight/> Sightseeing<FaCamera /></h4>
        </div>
        <div className='keys'>
          <h2>Key Highlights</h2>
            <ul type='square'>
              <li>Sydney Opera House</li>
              <li>Drive through  Dales National Park</li>
              <li>Sydney Harbour Bridge</li>
              <li>Queen Victoria Market</li>
              <li>TNational Gallery of Australia</li>
            </ul>
        </div>
        </div>
        <div>
        <Accordion className='Tourinfo'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Day 1</Accordion.Header>
        <Accordion.Body>
        Mumbai to Mumbai tour guests will report at the Chhatrapati Shivaji Maharaj International Airport, Mumbai as per the scheduled flight departure time and proceed to Melbourne is one of the most liveable cities in the world. The city’s architecture evokes the Victorian Era and has a European feel to it, which is sure to both rejuvenate and amaze you at the same time. Upon arrival, Veena World Tour Manager will guide all guests through the airport formalities and proceed to the hotel.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Day 2</Accordion.Header>
        <Accordion.Body>
        Today we explore Melbourne city, We see St. Patrick Cathedral, Town Hall, and Parliament House, followed by a visit to the Fitzroy Garden, which is a Victorian-style garden dotted with ornamental lakes, pavilions, fountains, sculptures, and a huge number of trees. Stroll through the shaded promenades. The garden’s most appealing attraction is the actual 18th-century cottage where Australia’s discoverer, Captain James Cook, spent his childhood — Captain Cook’s Cottage. We then ride the historic City Circle Tram and get around Central Melbourne, seeing Docklands, the City Museum, the Princess Theatre, etc. We end our City Circle Tram ride at Federation Square, a bustling city square with an iconic structure. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Day 3</Accordion.Header>
        <Accordion.Body>
        Today is the day we will cherish forever. We drive along one of the world’s most beautiful, stunning, and naturally maintained destinations – The Great Ocean Road. We get a unique opportunity to see the 12 Apostles, Shipwreck Coast, and Port Campbell National Park with a breath-taking helicopter ride, making us enjoy the rugged landscapes and endless sea views. Seeing these incredible limestone stacks from the ground level is a sight to behold, and you even get a unique perspective as you see them from the sky above.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Day 4</Accordion.Header>
        <Accordion.Body>
        Today we fly to Canberra – Australia’s capital city known for a vast collection of history and culture. Upon arrival we explore the city of Canberra with a visit to Mount Ainslie Lookout, which is a hill giving out picture-perfect vistas of the city. Later, we see the Australian National University and Lake Burley Griffin, named after Walter Burley Griffin, the architect who designed Canberra City. We then visit the New Parliament House, which is a unique and impressive architectural masterpiece and an iconic building that flashes in front of our eyes when we talk about Canberra. Here we take a guided tour in Australia’s iconic building high on capitol hill. It’s time to visit the Royal Australian Mint, an award-winning national cultural attraction and a heritage site.       </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Day 5</Accordion.Header>
        <Accordion.Body>
        The day begins with a soak in Sydney’s pleasant weather. We head to Sydney’s most exciting location, Darling Harbour, which is a splendid waterside location at the heart of Sydney, reserved only for pedestrians. Here we visit the Sydney Sea Life Aquarium, wherein you can get up close with sharks, rays, turtles, jellyfish, and much other exotic underwater life. Later, we visit the WILD LIFE Sydney Zoo. Australia is home to some of the world’s most Sydney Sea Life Aquarium unique and fascinating animals, and they’re all here!!! Walk through the iconic Australian habitats and encounter some of the rare animals that call Australia their home. We then visit the Sydney Opera House, a UNESCO World Heritage Site and one of the world's most iconic landmarks with a unique shape.  </Accordion.Body>     
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

export default Auss;