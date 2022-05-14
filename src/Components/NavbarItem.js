import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const NavbarItem = ({ count }) => {
    return (
        <div>
            <Navbar bg="danger" expand="lg">
                <Container>
                    <Link to="/">
                        <Navbar.Brand className='text-white'>BRAND</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link to="/inventory" style={{ textDecoration: "none", color: 'white' }}>
                                <Nav>Inventory</Nav>
                            </Link>
                            <Link to="/cart" style={{ textDecoration: "none", color: 'white' }}>
                                <Nav className='ms-3'>Cart {count}</Nav>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
