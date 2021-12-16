import React, { useEffect, useState } from "react";
import { Row, Container, Col, Form, Button } from "react-bootstrap";
import { DatabaseNavbar } from "../Navbar/DatabaseNavbar";
import Datepicker from "react-datepicker";

export const QueryDBPanel = (): JSX.Element => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState(new Date());
    const [status, setStatus] = useState('Select a Status');
    const [toggleFirstName, setToggleFirstName] = useState(false);
    const [toggleLastName, setToggleLastName] = useState(false);
    const [toggleDob, setToggleDob] = useState(false);
    const [toggleStatus, setToggleStatus] = useState(false);

    const onClickHandler = () => {

        let request = {};
        const uri = (!toggleFirstName && !toggleLastName && !toggleDob && !toggleStatus) ? 'http://localhost:5000/query-all' : 'http://localhost:5000/query';
        if (toggleFirstName && firstName !== '') {
            request = { firstname: firstName }
        } if (toggleLastName && lastName !== '') {
            request = { ...request, lastname: lastName }
        } if (toggleDob) {
            request = { ...request, dob: `${dob.getMonth()}/${dob.getDate()}/${dob.getFullYear()}` };
        } if (toggleStatus && status !== 'Select a Status') {
            request = { ...request, status: status };
        }

        fetch(uri,
            {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(request)
            }
        )
        .then((response) => {
            console.log("response = ", response.text().then((theText) => console.log(theText)));
        })
        .catch((error) => {
            console.log("fetch error = ", error);
        });
    }

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
                            <Form.Label style={{ textAlign: 'center', display: 'block'}}>Filter Panel</Form.Label>
                            <br />
                            <Row>
                                <Col>
                                    <Form.Check
                                        type="checkbox"
                                        id="firstname-check"
                                        label="Toggle First Name query"
                                        onChange={() => {setToggleFirstName(!toggleFirstName)}}
                                    />
                                </Col>
                                <Col>
                                    <Form.Check
                                        type="checkbox"
                                        id="lastname-check"
                                        label="Toggle Last Name query"
                                        onChange={() => {setToggleLastName(!toggleLastName)}}
                                    />
                                </Col>
                                <Col>
                                    <Form.Check
                                        type="checkbox"
                                        id="dob-check"
                                        label="Toggle DOB query"
                                        onChange={() => {setToggleDob(!toggleDob)}}
                                    />
                                </Col>
                                <Col>
                                    <Form.Check
                                        type="checkbox"
                                        id="status-check"
                                        label="Toggle Status query"
                                        onChange={() => {setToggleStatus(!toggleStatus)}}
                                    />
                                </Col>
                            </Row>
                        </Form>
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
                                <Form.Control type="text" placeholder="e.g. Carl"
                                    onChange={(selectedFirstName) => {
                                        setFirstName(selectedFirstName.target.value);
                                    }}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="e.g. Johnson"
                                    onChange={(selectedLastName) => {
                                        setLastName(selectedLastName.target.value);
                                    }}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicDob">
                                <Form.Label>DOB</Form.Label>
                                <Datepicker
                                    selected={dob}
                                    onChange={(selected) => {
                                        const dateString = selected?.toLocaleString();
                                        if (dateString !== undefined) {
                                            const splitDateString = dateString.split("/");
                                            const month = splitDateString[0].trim();
                                            const day = splitDateString[1].trim();
                                            const year = splitDateString[2].trim().substring(0,4);
                                            setDob(new Date(parseInt(year,10), parseInt(month,10)-1, parseInt(day,10)));
                                        }
                                    }}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicStatus">
                                <Form.Control as="select" onChange={(selected) => {
                                    setStatus(selected.target.value);
                                }}>
                                    <option value="Select a Status">Select a Status</option>
                                    <option value="Customer">Customer</option>
                                    <option value="Admin">Admin</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <br />
                <Row style={{ textAlign: "center" }}>
                    <Col>
                        <Button variant="outline-primary" style={{ textAlign: 'center'}} onClick={() => onClickHandler()}>Query DB</Button>
                    </Col>
                </Row>
            </Container>
        </>

    );
};
