import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function About() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [mobile, setMobile] = useState('');
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const userData = {
        fname: fname,
        lname: lname,
        mobile: mobile 
      };

      axios.post('http://localhost:5000/users', userData)
        .then(res => {
          console.log(res.data);
          // Optionally, provide feedback to the user upon successful submission
        })
        .catch(err => {
          console.error(err);
          // Provide feedback to the user about the error
        });
      setValidated(true);
    }
  };

  return (
    <div>
      <Form className='about' noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Fname</Form.Label>
          <Form.Control type="text" placeholder="Enter your Fname" value={fname} onChange={(e) => setFname(e.target.value)} required />
          <Form.Control.Feedback type="invalid">Please provide a first name.</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Lname</Form.Label>
          <Form.Control type="text" placeholder="Enter your Lname" value={lname} onChange={(e) => setLname(e.target.value)} required />
          <Form.Control.Feedback type="invalid">Please provide a last name.</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Mobile</Form.Label>
          <Form.Control type='tel' placeholder="Enter your Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
          <Form.Control.Feedback type="invalid">Please provide a valid mobile number.</Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default About;
