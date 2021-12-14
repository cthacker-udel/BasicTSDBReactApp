import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { UseStateContext } from '../../util/useReducerUtil/UseStateContext';
import { UseDispatchContext } from '../../util/useReducerUtil/UseDispatchContext';
import { StatusNotification } from '../Notifications/StatusNotification';

export const NotificationPanel = () => {

    const { state } = UseStateContext();

    console.log("notif state = ", state);

    return(
        <>
            <Container>
                <Row>
                    <Col>
                        <ListGroup>
                            {
                                state.notifications.map((eachNotification, index) => {

                                    return(
                                    <ListGroup.Item variant={eachNotification.type} key={index}>
                                            <StatusNotification header={eachNotification.header} body={eachNotification.body} />
                                    </ListGroup.Item>
                                    );
                                })
                            }
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </>
    );

};
