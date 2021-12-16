import React, { useState } from "react";
import { Container, Row, Col, Offcanvas } from "react-bootstrap";
import { UseDispatchContext } from "../../util/useReducerUtil/UseDispatchContext";
import { UseStateContext } from "../../util/useReducerUtil/UseStateContext";
import { DatabaseNavbar } from "../Navbar/DatabaseNavbar";
import { MainPageDatabaseDisplayPanel } from "./MainPageDatabaseDisplayPanel";
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
                <br />
                <br />
                <br />
                <Row>
                    <Col>
                        <MainPageDatabaseDisplayPanel />
                    </Col>
                </Row>
            </Container>
        </>
    );

}