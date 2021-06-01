import React from "react";
import "../books.css";
import crazy from "../assets/ceazy.png";
import Chnakya from "../assets/chankya.jpg";
import elephant from "../assets/ele.jpg";
import bookN from "../assets/fck.jpg";
import bookX from "../assets/kault.jpg";
import bookL from "../assets/kulandini.jpg";


import { Card, Row ,Col,Button} from "react-bootstrap";

const BooksCase = () => {
  return (
    <div className="case_main">
      <div className="heading">
        <h1>THE BEST BOOKS AND AUDIOBOOKS ARE WAITING FOR YOU</h1>
      </div>
      <div className="books">
          <Row>
              <Col lg={6}>
        <Card style={{ width: "95%" , margin : "4%"}}>
            <Row>
                <Col lg={6}>
          <Card.Img variant="left" src={crazy} />
          </Col>
          <Col lg={6}>
          <Card.Title>Card Title</Card.Title>
            <Card.Text style ={{ color : "black"}}>
              Some quick example text to build on the card title and make up the
              bulk of the card's 
              <Button variant="info"   style={{margin:"4%"}}>Read</Button>
            </Card.Text>
          
          </Col>
          </Row>
        </Card>
        </Col>
        <Col lg={6}>
        <Card style={{ width: "95%" , margin : "4%"}}>
            <Row>
                <Col lg={6}>
          <Card.Img variant="left" src={Chnakya} />
          </Col>
          <Col lg={6}>
          <Card.Title>Card Title</Card.Title>
            <Card.Text style ={{ color : "black"}}>
              Some quick example text to build on the card title and make up the
              bulk of the card's 
              <Button variant="info"  style={{margin:"4%"}}>Read</Button>
            </Card.Text>
          
          </Col>
          </Row>
        </Card>
        </Col>
        <Col lg={6}>
        <Card style={{ width: "95%" , margin : "4%" }}>
            <Row>
                <Col lg={6}>
          <Card.Img variant="left" src={elephant} />
          </Col>
          <Col lg={6}>
          <Card.Title>Card Title</Card.Title>
            <Card.Text style ={{ color : "black"}}>
              Some quick example text to build on the card title and make up the
              bulk of the card's 
              <Button variant="info"  style={{margin:"4%"}}>Read</Button>
            </Card.Text>
          
          </Col>
          </Row>
        </Card>
        </Col>
        <Col lg={6}>
        <Card style={{ width: "95%" , margin : "4%"}}>
            <Row>
                <Col lg={6}>
          <Card.Img variant="left" src={bookN} />
          </Col>
          <Col lg={6}>
          <Card.Title>Card Title</Card.Title>
            <Card.Text style ={{ color : "black"}}>
              Some quick example text to build on the card title and make up the
              bulk of the card's 
              <Button variant="info"  style={{margin:"4%"}}>Read</Button>
            </Card.Text>
          
          </Col>
          </Row>
        </Card>
        </Col>
        <Col lg={6}>
        <Card style={{ width: "95%" , margin : "4%"}}>
            <Row>
                <Col lg={6}>
          <Card.Img variant="left" src={bookL} />
          </Col>
          <Col lg={6}>
          <Card.Title>Card Title</Card.Title>
            <Card.Text style ={{ color : "black"}}>
              Some quick example text to build on the card title and make up the
              bulk of the card's 
              <Button variant="info"  style={{margin:"4%"}}>Read</Button>
            </Card.Text>
          
          </Col>
          </Row>
        </Card>
        </Col>
        <Col lg={6}>
        <Card style={{ width: "95%" , margin : "4%"}}>
            <Row>
                <Col lg={6}>
          <Card.Img variant="left" src={bookX} />
          </Col>
          <Col lg={6}>
          <Card.Title>Card Title</Card.Title>
            <Card.Text style ={{ color : "black"}}>
              Some quick example text to build on the card title and make up the
              bulk of the card's 
              <Button variant="info"  style={{margin:"4%"}}>Read</Button>
            </Card.Text>
          
          </Col>
          </Row>
        </Card>
        </Col>
        </Row>
      </div>
      <button className="btnM">Read for free 30 Days</button>
      <p>Cancel Anytime.</p>
    </div>
  );
};
export default BooksCase;
