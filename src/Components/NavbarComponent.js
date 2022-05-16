import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/navbar.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Logo from '../Images/logo.png';

function NavbarComponent() {
    return (
        <div>
            <Navbar className='nav' collapseOnSelect expand='lg' variant='dark'>
                <Container>
                    <Navbar.Brand href='/'>
                        <img src={Logo} width='30' alt='moon' />
                    </Navbar.Brand>
                    <Navbar.Brand href='/' className='nav mr-auto'>
                        Twinkl
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='ml-auto'>
                            <div className='box'>
                                <Nav.Link href='/signin'>Sign in</Nav.Link>
                            </div>
                            <div className='box'>
                                <Nav.Link href='/aboutus'>
                                    Discover how sleep cycles work
                                </Nav.Link>
                            </div>
                            <div className='box'>
                                <Nav.Link href='/sleepfact'>
                                    Sleep fact of the day
                                </Nav.Link>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavbarComponent;
