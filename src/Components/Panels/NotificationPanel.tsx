import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

export const NotificationPanel = () => {


    return(

        <>

            <Container style={{ border: "1px dashed black"}}>
                <Row>
                    <Col>
                        <h4>Notification Panel</h4>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <ListGroup>
                            <ListGroup.Item variant="primary">Example Notification</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>

        </>

    );

}