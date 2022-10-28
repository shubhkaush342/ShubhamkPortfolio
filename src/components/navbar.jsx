import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {
  const Name="<SHUBHAM KAUSHAL/>";
  const Space = " ";
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">{Name}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end flex" id=" responsive-navbar-nav ">
          <Nav >
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <NavDropdown title="Projects" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#projects">Movie List</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Food App</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Weather</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="https://drive.google.com/file/d/1d_Wzq0QV4YtkMR5f1Qxw_XGANO17VtkV/view?usp=sharing" target="__blank" download> 
            <i class="bi bi-download"></i>{Space}Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;