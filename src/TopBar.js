import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function TopBar () {
return(
    <Navbar bg="light" expand="lg" >
    <Navbar.Brand style={{ margin: "5px 0 0 20px", position: "absolute", top: 0, left: 0 }} href="#home">
        <img src="https://logowik.com/content/uploads/images/instacart7510.jpg" style={{ width: '100px', height: 'auto' }} /> 
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"> 
        </Nav>
        <Nav style={{ position: "absolute", top: 0, right: 0 }}>
            <Nav.Link href="#LogIn">Log In</Nav.Link>
            <Button variant="success">Sign Up</Button>{' '}
        </Nav>
    </Navbar.Collapse>
</Navbar>
)
}

export default TopBar