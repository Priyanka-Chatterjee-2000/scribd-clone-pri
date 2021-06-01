import React from "react"
import {Container,Row, Col} from 'react-bootstrap';
import '../section.css'

const Section = () => {
    return (
        <React.Fragment>

        <div className="section_main">
            <Container>
            <Row>
                <Col>
            <div className="head">
                <h1>All in one simple subscription</h1>
            </div>
            </Col>
            </Row>
            
            <Row className="icons">
                <Col xs={6} lg={2}>
                
                <i className="fas fa-book" style ={{ fontSize :"2.04rem",color : "#1e7b85"}}></i>
                    <h5>Books</h5>
                
               </Col>
                <Col xs={6} lg={2}>
                <i className="fas fa-headphones-alt" style ={{ fontSize :"2.04rem",color : "#1e7b85"}}></i>
                    <h5>Audiobooks</h5>
                </Col>

                <Col xs={6} lg={2}>
                <i className="fas fa-book-open" style ={{ fontSize :"2.04rem",color : "#1e7b85"}}></i>
                    <h5>Magazines</h5>
                </Col>

                <Col xs={6} lg={2}>
                   
                <i class="fas fa-microphone-alt" style ={{ fontSize :"2.04rem",color : "#1e7b85"}}></i>
                    <h5>Podcasts</h5>
                </Col>

                <Col xs={6} lg={2}>
                <i class="fas fa-music" style ={{ fontSize :"2.04rem",color : "#1e7b85"}}></i>
                    <h5>Sheet Music</h5>
                </Col>
                <Col xs={6} lg={2}>
                <i class="fas fa-file-alt" style ={{ fontSize :"2.04rem",color : "#1e7b85"}}></i>
                    <h5>Document</h5>
                </Col>
                
            </Row>
            
            <Row className="quote_main">
                   <Col lg={12}> 
                <p>Scribd is overall the best and most convenient deal for online reading.</p>
                    <p>Business Insider</p>
                    </Col>
            </Row>
            </Container>  
        </div>
        </React.Fragment>
    )
}
export default Section;
