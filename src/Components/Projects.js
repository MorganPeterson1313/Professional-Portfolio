import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import MorganArtWebsite from '../MorganArtWebsite.png';
import myfitforthesoul from '../myfitforthesoul.png';
import Image from 'react-bootstrap/Image';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

export class Projects extends Component {
    render() {
        return (
            <div>
                  <Jumbotron style={{margin:"20%" , opacity:"90%", border: "2px solid green",boxShadow: "10px 5px 5px green"}} fluid>
        <Container>
            <h1 style={{color:"green"}}>Projects</h1>
            <Nav>

        <Nav.Link href="https://myfitforthesoul.netlify.app">
        <Image style ={{marginBottom:"5%"}}
        src={myfitforthesoul}
        width="auto"
        height="400"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
        
      />
    </Nav.Link>
      <Nav.Link href="https://www.morgandaliapetersonart.com">
      <Image
        src={MorganArtWebsite}
        width="auto"
        height="400"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
        
      />
</Nav.Link>
</Nav>


        </Container>
        </Jumbotron>
            </div>
        )
    }
}

export default Projects
