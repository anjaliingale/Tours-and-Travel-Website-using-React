import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function Login() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
            // e.preventDefault();

        try {
            const res = await axios.post("http://localhost:8000/signup", { email, password });
            if (res.data === "exist") {
                alert("User already exists");
            } else if (res.data === "notexist") {
                navigate("/signIn", { state: { id: email } });
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Something went wrong. Please try again.");
        }
    }

    return (
        <div className="login">
            <br />
            <br />
            <br />
            <br />
            <center>
                <h1>Signup for Elite Travels</h1>
                <hr style={{color:'black', height:'5px', backgroundColor:'black'}}/>
                <br/>
                <form onSubmit={submit}>
                    <label>Enter your Name:</label>
                    <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Name" />
                    <br /><br />
                    <label>Enter your Number:</label>
                    <input type="number" onChange={(e) => setNumber(e.target.value)} placeholder="Number" />
                    <br /><br />
                    <label>Enter your Email:</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                    <br /><br />
                    <label>Set your Password:</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                    <br /><br />
                    <Button variant="primary" onClick={() => { submit(); navigate("/") }}>Signup</Button>
                </form>
                <br />
                <p>Already have an account?<Link to="/">Login</Link></p>
                
                <br />
            </center>
            <br />
        </div>
    );
}

export default Login;
