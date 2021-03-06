import React from "react"
import LinkBox from './LinkBox';
import WJS from "../assets/WJS.svg";
import tc from "../assets/tc.svg";
import ls from "../assets/ls.svg"
import f from "../assets/f.svg"
import today from "../assets/logo_today.svg"
import { Row ,Col,Container} from "react-bootstrap";

const Trending = ()=>{
    return(
        <Container className="trend_main">
            <Row>
                <Col>
        <h5>IN THE PRESS</h5>
        </Col>
        </Row>
            <Row className="logos">
               <Col xs="12" lg="2"> <img src={tc} alt="img"/></Col>
              
                <Col xs="12" lg="2"><img src={f} alt="img"/></Col>
                <Col xs="12" lg="3"><img src={ls} alt="img"/></Col>
                <Col xs="12" lg="2"><img src={WJS} alt="img"/></Col>
                <Col xs="12" lg="2"><img src={today} alt="img"/></Col>
                
            </Row>
            
            <Row className="txtx">
        <Col lg={2}className="one">
            <LinkBox name="It's Not Summer Without You"
             link="Jenny Han"/>

            <LinkBox name="The House We Grew Up In: A Novel"
             link="Lisa Jewell"/>

            <LinkBox name="City of Lost Souls: The Mortal Instruments, Book Five"
             link="Molly Quinn"/>

            <LinkBox name="The Great Divorce" 
            link="C.S lewis"/>
        </Col>
        <Col lg={2} className="one">
            <LinkBox name="Chicken Big"
             link="Keith Graves"/>

            <LinkBox name="Red Queen" link="Victoria Aveyard"/>

            <LinkBox name="Confess: A Novel" link="Colleen Hoover"/>

            <LinkBox name="The Life-Changing Magic of Tidying Up: The Japanese Art of Decluttering and Organizing" link="Marie Kondo"/>

        </Col>
        <Col lg={2} className="one">
            <LinkBox name="The Life-Changing Magic of Tidying Up: The Japanese Art of Decluttering and Organizing" link="Marie Kondo"/>
            <LinkBox name="The Three-Body Problem" link="Cixin Liu"/>
            <LinkBox name="The Misadventures of Awkward Black Girl" link=" Issa Rae"/>

            <LinkBox name="The Achievement Habit: Stop Wishing, Start Doing, and Take Command of Your Life" link="Bernard Roth"/>
        </Col>
        <Col lg={2} className="one">
            <LinkBox name="
The Baller: A Down and Dirty Football Novel" link="Vi Keeland"/>
            <LinkBox name="The 5 Love Languages: The Secret to Love that Lasts" link="Gary Chapman"/>
            <LinkBox name="All the Missing Girls: A Novel" link=" Megan Miranda"/>
            <LinkBox name="A Quick and Simple Summary and Analysis of The Miracle Morning by Hal Elrod" link="SpeedReader Summaries"/>
        </Col>
        <Col lg={2}  className="one">
            <LinkBox name="The Mist" link="Stephen King"/>
            <LinkBox name="Stillhouse Lake" link="Rachel Caine"/>

            <LinkBox name="Girl, Wash Your Face: Stop Believing the Lies About Who You Are so You Can Become Who You Were Meant to Be" link="Rachel Hollis"/>
            <LinkBox name="All Your Perfects: A Novel" link="Colleen Hoover"/>
        </Col>
        <Col lg={2}  className="one">
            <LinkBox name="The Creation Frequency: Tune In to the Power of the Universe to Manifest the Life of Your Dreams" link="Mike Murphy"/>
            <LinkBox name="
A Court of Frost and Starlight" link="Sarah J. Maas"/>
            <LinkBox name="My Favorite Half-Night Stand" link="Christina Lauren"/>
            <LinkBox name="
Playing House" link="Amy Andrews"/>
        </Col>
            </Row>

        </Container>
    )
}
export default Trending;
