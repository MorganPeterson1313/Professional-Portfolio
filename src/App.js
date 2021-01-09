import logo from './logo.svg';
import './App.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Resume from './Components/Resume';
import Home from './Components/Home';
import { Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Container>

<Navbar expand="lg" variant="dark" bg="dark" fixed = "top" style={{marginLeft: "20%",marginRight:"20%" ,borderBottom:"2px solid green"}}>
  <Container>
    <Navbar.Brand style= {{color:"green"}} href="/">
    
      
      Morgan Dalia Peterson</Navbar.Brand>
      <Nav className="justify-content-end">
      <Nav.Link style= {{color:"green"}}  href="/resume">Resume</Nav.Link>
      <Nav.Link style= {{color:"green"}} href="https://www.linkedin.com/in/morgandpeterson/">LinkedIn</Nav.Link>
      <Nav.Link style= {{color:"green"}} href="/projects">Projects</Nav.Link>
      <Nav.Link style= {{color:"green"}} href="/contact">Contact</Nav.Link>
    </Nav>
  </Container>
</Navbar>




      
      </Container>



      <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/resume' component={Resume} />
              <Route path='/projects' component={Projects} /> 
             
              <Route path='/contact' component={Contact} />
                        {/* <Route render={function () {
                            return <p>Not found</p>
                        }} /> */}
                   </Switch>

                   <div style={{marginBottom:"5%"}}>
                     <h6 style={{color:"teal", fontSize:"15px"}} >©2020 by Morgan Dalia Peterson</h6>
                     </div>
    </div>
  );
}

export default App;
