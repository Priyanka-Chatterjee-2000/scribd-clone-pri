import React from 'react'
import LinkBox from "./LinkBox";
import "../footer.css"
import Apple from "../assets/apl.svg"
import Play from "../assets/an.svg"
import { Row, Col } from 'react-bootstrap';
const ColoredLine = ({ color }) => (
    <hr style={{
            color: color,
            backgroundColor: color,
            height: 2,
            
        }}
    />
)

const Footer = () => {
    return (
        
        <div className="footer">
            <Row className="root">

                <Row className="link_main">

                <Col xs={12} lg={2} className="linkx">
                    <h4>About</h4>
                    <LinkBox name="About Scribd" />
                    <LinkBox name="Press" />
                    <LinkBox name="Our Blog" />
                    <LinkBox name="Join our team!" />
                    <LinkBox name="Contact us" />
                    <LinkBox name="Invite friends" />
                    <LinkBox name="Gifts" />
                    <LinkBox name="Scribd Enterprise" />
                </Col>
                <Col xs={12} lg={2} className="linkx">
                    <h4>Support</h4>
                    <LinkBox name="Help / FAQ" />
                    <LinkBox name="Accessibility" />
                    <LinkBox name="Purchase help" />
                    <LinkBox name="AdChoices" />
                    <LinkBox name="Publishers" />

                </Col>
                <Col xs={12} lg={2} className="linkx">
                    <h4>Legal</h4>
                    <LinkBox name="Terms" />
                    <LinkBox name="Privacy" />
                    <LinkBox name="Condition" />

                </Col>
                <Col xs={12} lg={2} className="linkx">
                    <h4>Social</h4>
                    <LinkBox name="Instagram" />
                    <LinkBox name="Twitter" />
                    <LinkBox name="Facebook" />
                    <LinkBox name="Pinterest" />

                    </Col>
                  
                <Col xs={12} lg={2} className="promo">
                <h4>Get Our free Apps</h4>
                <img src={Apple} alt="app"/>
                <img src={Play} alt="app"/>
                </Col>
                
            </Row>

           
            
            <ColoredLine color="grey"/>
          <Col className="bottom">
           
                <li>Books</li>
                <li>AudioBooks</li>
                <li>Magazines</li>
                <li>Podcasts</li>
                <li>Sheet Music</li>
                <li>Documents</li>
                <li>Snapshots</li>
                <li>Directory</li>
                </Col>
          </Row>
          
        </div>
          
    )
}
export default Footer;