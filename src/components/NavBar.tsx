import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import {ANIMALS_ROUTE, FEEDS_ROUTE, POSITION_ROUTE, VACCINATION_ROUTE} from "../services/const";

const NavBar = () => {
    const history = useNavigate();

    return (
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => history(ANIMALS_ROUTE)}>Animals</Nav.Link>
                        <Nav.Link onClick={() => history(FEEDS_ROUTE)}>Feeds</Nav.Link>
                        <Nav.Link onClick={() => history(POSITION_ROUTE)}>Positions</Nav.Link>
                        <Nav.Link onClick={() => history(VACCINATION_ROUTE)}>Vaccinations</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
