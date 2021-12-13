import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { DatabaseOperationControlPanel } from '../Panels/DatabaseOperationControlPanel';

export const DatabaseNavbar = () =>

    <Navbar bg='light' expand='lg'>

        <Container>
            <Navbar.Brand href="#home">Basic DB React-App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <DatabaseOperationControlPanel />
                </Nav>
            </Navbar.Collapse>
        </Container>

    </Navbar>;
