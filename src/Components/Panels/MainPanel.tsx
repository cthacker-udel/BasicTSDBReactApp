import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { DatabaseNavbar } from "../Navbar/DatabaseNavbar";
import { NotificationPanel } from "./NotificationPanel";

export const MainPanel = () => {

    return(
        <>
            <Container>
                <Row>
                    <Col>
                        <DatabaseNavbar />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <NotificationPanel />
                    </Col>
                </Row>
            </Container>
        </>
    );

}