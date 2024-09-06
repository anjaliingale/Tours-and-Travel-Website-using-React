import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';



function Login() {

    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    history("/home",{state:{id:email}})
                }
                else if(res.data=="notexist"){
                    alert("User have not sign up")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <div className="login">

            <br/>
            <br/>
            <br/>
            <br/>
            <center>

            <h1>Login to your account</h1>

            <form action="POST">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <br/><br/>
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  />
                <br/><br/>
                <Button variant="primary" onClick={submit}>Login</Button>
            </form>

            <br />
            <p></p>
        

            <p>Don't have an account?<Link to="/signUp">Signup Now!</Link></p>
            </center>
            <br/>
        </div>
        
    )
}

export default Login