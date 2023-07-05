import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'

const Navbars = () => {
    return (
        <>
           <Navbar  className='topnavbar py-3 py-lg-5' expand="lg" sticky="top" style={{backgroundColor: '#D8B09A '}} > 
        <Container fluid>
          <Navbar.Brand href="/">Södra Lundby Bygdegårdsförening  </Navbar.Brand>
         
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto navigation">
              
              <Nav.Link href="/" className="px-3" >Hem</Nav.Link>
              <Nav.Link href="/history" className="px-3">Historia</Nav.Link>
              <Nav.Link href="/tractorrace" className="px-3">Traktorrace</Nav.Link>
              <Nav.Link href="/contact" className="px-3">Kontakt/Hitta till oss</Nav.Link>

            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
        </>
    )
    }
    export default Navbars;