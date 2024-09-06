import React from "react"
import profile from './assets/profile.png'
import {useLocation, useNavigate} from 'react-router-dom';

function Home (){
    const location=useLocation()

    return (
        <div className="homepage">
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
<center>
    <img src={profile}height={125}width={125}/>
            <h1>Hello {location.state.id} 
            <br/>Welcome to Elite Travels</h1>
            <br/>
            </center>
        </div>
    )
}

export default Home