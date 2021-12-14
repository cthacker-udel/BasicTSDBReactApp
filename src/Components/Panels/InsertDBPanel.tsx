import React, { useState } from "react";
import { Col, Container, Form, Row, Button, Alert } from "react-bootstrap";
import { DatabaseNavbar } from "../Navbar/DatabaseNavbar";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { UseDispatchContext } from "../../util/useReducerUtil/UseDispatchContext";
import { UseStateContext } from "../../util/useReducerUtil/UseStateContext";

export const InsertDBPanel = () => {

    const { dispatch } = UseDispatchContext();
    const { state } = UseStateContext();

    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [dob, setDob] = useState<Date>(new Date());
    const [status, setStatus] = useState<string>("");
    const [display, setDisplay] = useState<boolean>(false);

    const onClickHandler = () => {

        if (status === "" || firstName === "" || lastName === "") {
            setDisplay(true);
            setTimeout(() => {
                setDisplay(false);
            },3000);
        } else {
            // valid inputs
            /*
            try { 
                fetch('http://localhost:5000/insert', {
                    method: 'POST',
                    mode: 'cors',
                    cache: 'no-cache',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        firstname: firstName,
                        lastname: lastName,
                        dob: `${dob.getMonth()}/${dob.getDate()}/${dob.getFullYear()}`,
                        status: status
                    })
                })
                .then((response) => {
                    dispatch({type: "addUser", payload: { ...state, newUser: {
                        firstname: firstName,
                        lastname: lastName,
                        dob: `${dob.getMonth()}/${dob.getDate()}/${dob.getFullYear()}`,
                        status: status
                    }}});
                })
                .catch((err) => {
                    console.log("post error = ", err);
                });
            } catch (err) {
                console.log("in insert err = ", err);
                dispatch({type: "addUser", payload: { ...state, newUser: {
                    firstname: firstName,
                    lastname: lastName,
                    dob: `${dob.getMonth()}/${dob.getDate()}/${dob.getFullYear()}`,
                    status: status
                }}});
            }
            */
            dispatch({type: "addUser", payload: { ...state, newUser: {
                firstname: firstName,
                lastname: lastName,
                dob: `${dob.getMonth()}/${dob.getDate()}/${dob.getFullYear()}`,
                status: status
            }}});
            dispatch({type: "updateNotifications", payload: { ...state, notifications: [

                ...state.notifications,
                {
                    header: `Added User : ${firstName} ${lastName}`,
                    body: `${new Date().toDateString()}`,
                    type: "success"
                }

            ]}})
        }
    }

    return(

        <Container>
            <Row>
                <Col>
                    <DatabaseNavbar />
                </Col>
            </Row>
            <Row>
                <Col>
                <br />
                <br />
                <br />
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicDateOfBirth">
                            <Form.Label>Date Of Birth</Form.Label>
                            <DatePicker
                            selected={dob}
                            onChange={(date) => {
                                const dateString = date?.toLocaleString();
                                console.log("dateString = ", dateString);
                                if (dateString !== undefined) {
                                    //setDob(new Date(dateString));
                                    const splitDateString = dateString.split("/");
                                    const month = splitDateString[0].trim();
                                    const day = splitDateString[1].trim();
                                    const year = splitDateString[2].trim().substring(0,4);
                                    setDob(new Date(parseInt(year,10), parseInt(month,10)-1, parseInt(day,10)));
                                }
                            }
                            }/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicFirstName">
                            <Form.Label>Enter first name</Form.Label>
                            <Form.Control type="text" placeholder="Enter first name here" onChange={(event) => {
                                setFirstName(event.target.value);
                            }}
                            isValid={firstName.length > 0}
                            isInvalid={firstName.length === 0}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter a first name
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicLastName">
                            <Form.Label>Enter last name</Form.Label>
                            <Form.Control type="text" placeholder="Enter first name here" onChange={(event) => {
                                setLastName(event.target.value);
                            }}
                            isValid={lastName.length > 0}
                            isInvalid={lastName.length === 0}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter a last name
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEnterStatus">
                            <Form.Label>Select Status</Form.Label>
                            <Form.Control as="select" placeholder="Enter first name here" onChange={(event) => {
                                setStatus(event.target.value);
                            }}
                            isValid={status !== ""}
                            isInvalid={status === ""}
                            >
                                <option value="" key="default">Select a status</option>
                                <option value={"Customer"} key={"customer"}>Customer</option>
                                <option value={"Admin"} key={"admin"}>Admin</option>
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                                Please enter a status
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Row style={{ textAlign: "center"}}>
                <Col>
                        <Link to="/mainpage">
                            <Button onClick={() => onClickHandler()} style={{ textAlign: "center" }}>
                                Submit Document to Database
                            </Button>
                        </Link>
                </Col>
            </Row>
            <br />
            <br />
            <br />
            <Row>
                <Col>
                    {
                        display && 
                        <Alert variant="danger" onClose={() => setDisplay(false)} dismissible>
                            <Alert.Heading>Errors in document fields</Alert.Heading>
                        </Alert>
                    }
                </Col>
            </Row>
        </Container>

    );

};
