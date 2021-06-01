import React from 'react'

import '../navbar.css'
import scribd from '../assets/x.svg'
import { Nav, Navbar } from 'react-bootstrap';


const nav = ()=>{

    return(
        <Navbar className="nav">

        <div className="logo">
        
            <img src={scribd} alt="logo"/>
        </div>
        <Nav.Item>
      <Nav.Link href="#"><button className="btn__sign">Sign up</button></Nav.Link>
    </Nav.Item>
       
        </Navbar>

    )
}

export default nav;