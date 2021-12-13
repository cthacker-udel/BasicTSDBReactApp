import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { UseStateContext } from '../../util/useReducerUtil/UseStateContext';
import { UseDispatchContext } from '../../util/useReducerUtil/UseDispatchContext';
import { StatusNotification } from '../Notifications/StatusNotification';

export const NotificationPanel = () => {

    const { state } = UseStateContext();
    const { dispatch } = UseDispatchContext();

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
                            {
                                state.notifications.map((eachNotification, index) => {

                                    <ListGroup.Item variant="primary" key={index}>
                                            <StatusNotification header={eachNotification.header} body={eachNotification.body} />
                                    </ListGroup.Item>

                                })
                            }
                        </ListGroup>
                    </Col>
                </Row>
            </Container>

        </>

    );

}