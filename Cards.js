import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import s1 from "./assets/Eu.avif";
import s2 from "./assets/amer.avif";
import s3 from "./assets/aus.avif";
import {useNavigate} from 'react-router-dom';
import CardGroup from "react-bootstrap/CardGroup";
import "./style.css";
import Abc123 from './Abc123'


const Cards = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <div className="card-container">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={s1} />
          <Card.Body>
            <Card.Title>Europe</Card.Title>
            <Card.Text>
              The land of fantasy and the years of glory resonating melodious
              symphony in the cobblestoned streets.
            </Card.Text>
            <Button variant="primary">Explore More</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={s2} />
          <Card.Body>
            <Card.Title>America</Card.Title>
            <Card.Text>
              A futuristic inspiration and the land of all natures, has an old
              sassy habit to always lure in the explorers.
            </Card.Text>
            <Button variant="primary">Explore More</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={s3} />
          <Card.Body>
            <Card.Title>Australia</Card.Title>
            <Card.Text>
              Perfect definition of what Earth should be like, these kingdoms
              have always been an inspiration of every aspect that may strike.
            </Card.Text>
            <Button variant="primary">Explore More</Button>
          </Card.Body>
        </Card>
      </div> */}
      {/* <Abc123/> */}
      <CardGroup>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={s1} />
          <Card.Body>
            <Card.Title>Europe</Card.Title>
            <Card.Text>
              The land of fantasy and the years of glory resonating melodious
              symphony in the cobblestoned streets.
            </Card.Text>
            <Button variant="primary" onClick={()=>navigate("/europe")}>Explore More</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={s3} />
          <Card.Body>
            <Card.Title>Australia</Card.Title>
            <Card.Text>
              Perfect definition of what Earth should be like, these kingdoms
              have always been an inspiration of every aspect that may strike.
            </Card.Text>
            <Button variant="primary" onClick={()=>navigate("/auss")}>Explore More</Button>          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={s2} />
          <Card.Body>
            <Card.Title>America</Card.Title>
            <Card.Text>
              A futuristic inspiration and the land of all natures, has an old
              sassy habit to always lure in the explorers.
            </Card.Text>
            <Button variant="primary" onClick={()=>navigate("/america")}>Explore More</Button>          
            </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </>
  );
};
export default Cards;
