import React, { useState } from "react";
import { Container, Row, Col, Offcanvas } from "react-bootstrap";
import { UseDispatchContext } from "../../util/useReducerUtil/UseDispatchContext";
import { UseStateContext } from "../../util/useReducerUtil/UseStateContext";
import { DatabaseNavbar } from "../Navbar/DatabaseNavbar";
import { NotificationPanel } from "./NotificationPanel";

export const MainPanel = () => {

    const { state } = UseStateContext();
    const { dispatch } = UseDispatchContext();

    return(
        <>
            <Container>
                <Row>
                    <Col>
                        <DatabaseNavbar />
                    </Col>
                </Row>
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
        </>
    );

}