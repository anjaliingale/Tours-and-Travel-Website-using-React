import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from "react-bootstrap/CardGroup";
import React from 'react'
import s1 from './assets/kerala.avif'
import s2 from './assets/raj.avif'
import s3 from './assets/jk.avif'
import {useNavigate} from 'react-router-dom';
import './style.css'

const Cards=()=>{
  const navigate = useNavigate();

    return(
        <>
       
        {/* <div className="card-container">
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={s1} />
        <Card.Body>
          <Card.Title>Kerala</Card.Title>
          <Card.Text>
          The coastal grandeur in the arms of mother earth, cloaked with serene love, lies India’s Southern surreal.
          </Card.Text>
          <Button variant="primary">Explore More</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={s2} />
      <Card.Body>
        <Card.Title>Rajasthan</Card.Title>
        <Card.Text>
        The empire of the kings, reign of royal palaces and glorious forts, all reverberate the saga of the victorious.
        </Card.Text>
        <Button variant="primary">Explore More</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={s3}/>
    <Card.Body>
      <Card.Title>Jammu and Kashmir</Card.Title>
      <Card.Text>
      The land that many dream to experience is India’s Crown & Earth’s Paradise, indeed!
      </Card.Text>
      <Button variant="primary">Explore More</Button>
    </Card.Body>
  </Card>
  </div> */}

  <CardGroup>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={s1} />
          <Card.Body>
            <Card.Title>Kerala</Card.Title>
            <Card.Text>
            The coastal grandeur in the arms of mother earth, cloaked with serene love, lies India’s Southern surreal.

            </Card.Text>
            
            <Button variant="primary" onClick={()=>navigate("/kerala")}>Explore More</Button>          
            </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={s2} />
          <Card.Body>
            <Card.Title>Rajasthan</Card.Title>
            <Card.Text>
            The empire of the kings, reign of royal palaces and glorious forts, all reverberate the saga of the victorious.

            </Card.Text>
            <Button variant="primary" onClick={()=>navigate("/rajasthan")}>Explore More</Button>          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={s3} />
          <Card.Body>
            <Card.Title>Jammu and Kashmi</Card.Title>
            <Card.Text>
            The land that many dream to experience is India’s Crown & Earth’s Paradise, indeed!

            </Card.Text>
            <Button variant="primary" onClick={()=>navigate("/jk")}>Explore More</Button>          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
  
  </> 
    )
}
export default Cards;