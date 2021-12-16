import React, { useEffect, useState } from "react";
import { Row, Container, Col, Form, Button } from "react-bootstrap";
import { DatabaseNavbar } from "../Navbar/DatabaseNavbar";
import DatePicker from "react-datepicker";

export const QueryDBPanel = (): JSX.Element => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState(new Date());
    const [status, setStatus] = useState('');

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
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="e.g. Carl" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="e.g. Johnson" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicDob">
                                <Form.Label>DOB</Form.Label>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicStatus">
                                <Form.Control as="select">
                                    <option value="Select a Status">Select a Status</option>
                                    <option value="Customer">Customer</option>
                                    <option value="Admin">Admin</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <br />
                <br />
                <Row style={{ textAlign: "center" }}>
                    <Col>
                        <Button variant="outline-primary" style={{ textAlign: 'center'}}>Query DB</Button>
                    </Col>
                </Row>
            </Container>
        </>

    );
};
