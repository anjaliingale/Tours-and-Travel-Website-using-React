import React from 'react'
import image_42 from './assets/image_42.jpg'
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


const Europe = () => {
  const navigate = useNavigate();

  return (
    <>  
        <h2>European Magic (Europe with Scotland)</h2>
        <hr/>
        <div className='head'>
        <h2>European Magic (Europe with Scotland)</h2>
        <hr/>
        <h4><TbWorld/>3 Countries<CiCalendarDate/>5 Days<CiLocationArrow1/> 12 Cities</h4>
        </div>
        <img className='img' src={image_42} alt='imag' fluid height={500} width={400}/>
        <hr/>
        <div className='container'>
        <div className='tour'>
          <h2>Tour Includes</h2>
          <h4>Hotels<FaHotel/> Visa<FaCcVisa/> Meals<GiMeal/><br/> Transport<FaCar/> Flight<MdFlight/> Sightseeing<FaCamera /></h4>
        </div>
        <div className='keys'>
          <h2>Key Highlights</h2>
            <ul>
              <li>Edinburgh castle</li>
              <li>Drive through Yorkshire Dales National Park</li>
              <li>Stonehenge</li>
              <li>Enjoy cruise ride on Lake Windermere</li>
              <li>The University of Oxford</li>
            </ul>
        </div>
        </div>
        <div>
        <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Day 1</Accordion.Header>
        <Accordion.Body>
        ‘Mumbai to Mumbai Tour’ guests will report at Chhatrapati Shivaji International Airport, Mumbai as per the scheduled flight departure time and proceed to Glasgow – a port city on the River Clyde in Scotland’s Western Lowlands famous for its Victorian and art nouveau architecture. Joining and Leaving tour guests will join the group on their own at the designated place or hotel.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Day 2</Accordion.Header>
        <Accordion.Body>
        Today we proceed to Edinburgh – Scotland's capital city known for its medieval Old Town, elegant Georgian New Town, neoclassical buildings and gardens. Upon arrival we visit to Edinburgh castle – a historic fortress which played a pivotal role in Scottish history, both as a royal residence and as a military stronghold, followed by a visit to Glenkinchie Distillery - Here Learn about the craftsmanship, traditions, and techniques that go into creating their renowned single malt whiskies. Further we have a chance to taste and appreciate a range of high-quality Scotch whiskies.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Day 3</Accordion.Header>
        <Accordion.Body>
        Today we proceed to Edinburgh – Scotland's capital city known for its medieval Old Town, elegant Georgian New Town, neoclassical buildings and gardens. Upon arrival we visit to Edinburgh castle – a historic fortress which played a pivotal role in Scottish history, both as a royal residence and as a military stronghold, followed by a visit to Glenkinchie Distillery - Here Learn about the craftsmanship, traditions, and techniques that go into creating their renowned single malt whiskies. Further we have a chance to taste and appreciate a range of high-quality Scotch whiskies.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Day 4</Accordion.Header>
        <Accordion.Body>
Today we proceed to Lake District – a UNESCO World Heritage Site and popular holiday destination famous for its forests, mountains, lakes and also its association with great poet William Wordsworth for his Daffodils poem, who got inspired while taking a walk in the woods of the Lake District. Here we visit the shores of Lake Windermere and enjoy a cruise ride. Further we also enjoy a Steam Train ride. Later we proceed to York, here we enjoy the beautiful drive to York through the Yorkshire Dales National Park – which encompasses thousands of square miles of moors, valleys, hills and villages. Later we take a Viking walk of York city to know more about city’s Norman and Anglo-Scandinavian history while passing by various landmarks and historical sites like the city walls, Petergate, Stonegate and the magnificent Minster. We also visit Harry Potter movie fame The Shambles – an old street in York with overhanging 14th century timber framed buildings. Further we proceed to Manchester.        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Day 5</Accordion.Header>
        <Accordion.Body>
        Today we proceed towards Oxford and visit the University of Oxford – one of the oldest and best Universities in the World famous for its exceptional teaching, research and learning opportunities. We also visit Brasenose College (subject to operation) - constituent colleges situated in the heart of the University of Oxford. Further we proceed to Windsor – a beautiful town on the river Thames and home to Windsor Castle. Upon arrival we visit Windsor Castle – one of the residences of British Royal Family which is said to be a largest and oldest inhabited castle in the world and the Queen's favourite weekend home. Further we drive towards London – the capital city of England and United Kingdom situated on the banks of river Thames.      
        </Accordion.Body>
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

export default Europe