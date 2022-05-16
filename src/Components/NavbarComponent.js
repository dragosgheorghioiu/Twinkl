import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/navbar.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Logo from '../Images/logo.png';
import { Link } from 'react-router-dom';

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
                                <Link to='/signin' className='link-style'>
                                    Sign in
                                </Link>
                            </div>
                            <div className='box'>
                                <Link to='/aboutus' className='link-style'>
                                    Discover how sleep cycles work
                                </Link>
                            </div>
                            <div className='box'>
                                <Link to='/sleepfact' className='link-style'>
                                    Sleep fact of the day
                                </Link>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavbarComponent;
