import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import logo from '../assets/logo.png'
import '../navigation/Navbar.css'
import { MdSearch } from 'react-icons/md';
import { useNavigate } from "react-router-dom";


function NavigationBar() {

  const navigate = useNavigate();

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid className='navbar-container'>
        <Image src={logo} className='logo' />
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

          <Form.Select className='searchbar' >
            <option>Pakistan</option>
            <option>Azad Kashmir , Pakistan</option>
            <option>Punjab , Pakistan</option>
            <option>Sindh , Pakistan</option>
            <option>Balochistan , pakistan</option>
          </Form.Select>
          <Form.Control
            type="search"
            placeholder="Find Cars, Mobile Phones and more ..."
            className="me-2  searchbar2"
            aria-label="Search"
          />
          <Button type="submit" className='searchbtn'><MdSearch size={22} /></Button>


          <Nav.Link to='/myads'><h6 className='Loginbtn' style={{ margin: '20px' }}> Login </h6></Nav.Link>
          <Button className='sellBtn' onClick={()=> navigate("/postadd")}>
            <h6>+ SELL</h6> 
            </Button>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default NavigationBar;