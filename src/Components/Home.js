import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

export class Home extends Component {
    render() {
        return (
            <div>
                <Container>


                <Jumbotron style={{margin:"20%" , opacity:"90%", border: "2px solid green",boxShadow: "10px 5px 5px green"}} fluid>
        <Container style={{verticalAlign:"middle"}} >
            <h1 style= {{color:"green"}}> Morgan Dalia Peterson</h1>
            <h2 style={{marginTop: "5%"}}>Who I AM</h2>
            <div>
            <p  >
              <h5>
            I’m a creative and customer centric full stack web developer building multiple projects using React, React Hooks and 
            JavaScript. I honed my communication experience in the mortgage and small business technology sales industry. With a 
            track record of delivering excellent customer service in the sales industry and engineering user centric 
            solutions for achieving client satisfaction. I am more than certain that I will be an asset to your organization
            </h5>
            </p>
            </div>
            {/* <p>
    <         Button variant="dark">Learn more</Button>
            </p> */}
          </Container>
      </Jumbotron>
                </Container>
            </div>
        )
    }
}

export default Home
