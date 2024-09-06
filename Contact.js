import React, { useState } from 'react'
import axios from "axios"
import Button from 'react-bootstrap/Button';
import { IoIosContact } from "react-icons/io";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


const ContactUs = () => {

  const[name,setname]=useState('');
  const[email,setemail]=useState('');
  const[subject, setsubject]=useState('');
  const[message, setmessage]=useState('');
  const[validated,setValidated]=useState(false);

  const handleSubmit=() =>{

    const UserData={

      name:name,
      email:email,
      subject:subject,
      message:message
    }

      axios.post(`http://localhost:5000/users`,UserData)
      .then(res =>{
        console.log(res.data);
      })

      .catch(err=>{
        console.log(err);
      })
      setValidated(true);


   
  } 
  
  
    return (<>
    <center>
    <div>
    <h2 className="title"><IoIosContact />Contact Us</h2>
    </div>
    {/* <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.3105208456545!2d74.18287627350111!3d19.61401798170446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd0070e7eb3683%3A0x812069ad0d4f7f8f!2sAmrutvahini%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1706640906550!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
    <hr/><h3>Address:</h3>&nbsp;
    <p>Near, Pune - Nashik Hwy, Sangamner, Ghulewadi, Maharashtra 422608</p>
    &nbsp;
    <hr/>
    <h3>Feel free to contact us!</h3>
    <div className="containers">
    
    <div className='form'>
    <Form novalidated validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e)=>{setname(e.target.value)}} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter Email Address" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Subject</Form.Label>
          <Form.Control type="text" placeholder="Subject" value={subject} onChange={(e)=>{setsubject(e.target.value)}} />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Message</Form.Label>
          <Form.Control type="text" placeholder="Your Message" value={message} onChange={(e)=>{setmessage(e.target.value)}} />
        </Form.Group>

       
      </Row>

      

      <Button variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
    </div>
      </div> 
      </center>
      </>
    );
  };
  
  export default ContactUs;