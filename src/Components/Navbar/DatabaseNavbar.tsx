import React from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { UseDispatchContext } from '../../util/useReducerUtil/UseDispatchContext';
import { UseStateContext } from '../../util/useReducerUtil/UseStateContext';
import { DatabaseOperationControlPanel } from '../Panels/DatabaseOperationControlPanel';
import { NotificationPanel } from '../Panels/NotificationPanel';

export const DatabaseNavbar = () => {

    const { state } = UseStateContext();
    const { dispatch } = UseDispatchContext();

    return(
    <Navbar bg='light' expand='lg'>

        <Container>
            <Navbar.Brand href="#home">Basic DB React-App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <DatabaseOperationControlPanel />
                </Nav>
            </Navbar.Collapse>
            <Offcanvas
            show={state.toggleNotifications}
            onHide={ () => {
                dispatch({type: "toggleNotifications", payload: { ...state, toggleNotifications: !state.toggleNotifications }});
            }}
            >
                <Offcanvas.Header closeButton>
                    Notifications
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <NotificationPanel />
                </Offcanvas.Body>
            </Offcanvas>
        </Container>
    </Navbar>);
};

