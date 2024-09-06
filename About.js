import React from 'react'
import pic2 from './assets/pic2.jpeg'
import Container from 'react-bootstrap/Container';
import vid1 from './assets/vid1.mp4'
import './style.css';
import 'bootstrap/dist/css/bootstrap.css'; 
import Col from 'react-bootstrap/Col'; 
import Row from 'react-bootstrap/Row'; 

import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { RiRedPacketLine } from "react-icons/ri";
import { IoMdShare } from "react-icons/io";
import { FaFacebook,FaInstagram,FaYoutube,FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <>
    <h1 style={{textAlign:"center"}}> About ELITE </h1>
    <div>
      <img  src={pic2} alt='pic' width={1115} height={300}/>
      <hr/>
    </div><br/>
    <div className='Head'>
    <Container>
      <Row>
        <Col className="content-left">
             <h1>We are , ELITE TRAVELS!</h1>
             <p><b>Lakshya</b> - Bharat ki Sabse Behtareen Travel Company!</p>
             <p><b> Vision</b> - Incredible holiday experiences that Celebrate Life!</p>
             <p> &nbsp;&nbsp; We are on a mission to make travel affordable...</p>
             <p>Keep scrolling to find out more about the ELITE TRAVELS family!</p>
        </Col>
        <Col>

        <video src={vid1} width="700" height="350" controls="controls" autoplay="true"  className="content-right"/>

        </Col>
      </Row>
      </Container>
    </div>
    <hr/>
    

    {/* more about */}

    <div style={{ display: 'block', width: 1115,  padding: 30 }} className='more'> 
      
      <Row>
        <Col>
            
            <h5><HiOutlineBuildingOffice2 />  Our Offices</h5>
            <p>Located across the cities, ready to assist in planning & booking your perfect vacation.</p>
            <h6><a href='#'>Locate Us</a></h6>
        </Col>
      
        <Col>
        
           <h5> <MdOutlineWifiCalling3 />  Call us</h5>
           <p>Request a quote, or just chat about your next vacation. We're always happy to help!</p>
           <h6><a href='#'>1800 22 3421</a></h6>
        </Col>
      
        <Col>
        
           <h5> <RiRedPacketLine/>  Write to us</h5>
          <p>Be it an enquiry, feedback or a simple suggestion, write to us.</p>
          <h6 ><a href='#'>travel@elite.com</a></h6>
        </Col>
      
        <Col>
        
            <h5> <IoMdShare/>  Connect with us</h5>
            <p>Check out reviews, podcasts, blogs and more...</p>
            <h1><a href='#'><FaFacebook/></a>  <a href='#'><FaYoutube /></a>  <a href='#'><FaLinkedin/></a> <a href='#'> <FaInstagram /></a></h1>
        </Col>
      </Row> 
      <hr/>
      </div>
     
    </>
  )
}

export default About