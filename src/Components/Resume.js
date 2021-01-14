import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import MorganResumealso from '../MorganResumealso.pdf';

export class Resume extends Component {
    render() {
        return (
            <div>
                <Jumbotron style={{margin:"20%" , opacity:"90%", border: "2px solid green",boxShadow: "10px 5px 5px green"}}  fluid>
                    <Container>
                    <Image
        src={MorganResumealso}
        width="auto"
        height="auto"
        // className="d-inline-block align-top"
        alt="Resume"
      />

    
                    </Container>
                </Jumbotron>
            </div>
        )
    }
}

export default Resume
