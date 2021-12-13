import React from "react";
import { Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { UseDispatchContext } from "../../util/useReducerUtil/UseDispatchContext";
import { UseStateContext } from "../../util/useReducerUtil/UseStateContext";

export const DatabaseOperationControlPanel = () => {

    const { state } = UseStateContext();
    const { dispatch } = UseDispatchContext();

    return(
        <>
            <ButtonToolbar>
                <ButtonGroup className="me-2" aria-label="Load database button">
                    <Link to="/load-db">
                        <Button variant="outline-primary">
                            Load DB
                        </Button>
                    </Link>
                </ButtonGroup>
                <ButtonGroup className="me-2" aria-label="Query database button">
                    <Link to="/query-db">
                        <Button variant="outline-primary">
                            Query DB
                        </Button>
                    </Link>
                </ButtonGroup>
                <ButtonGroup className="me-2" aria-label="Insert data into DB button">
                    <Link to="/insert-db">
                        <Button variant="outline-primary">
                            Insert Data into DB
                        </Button>
                    </Link>
                </ButtonGroup>
                <ButtonGroup className="me-2" aria-label="Clear database button">
                    <Link to="/remove-db">
                        <Button variant="outline-primary">
                            Remove DB
                        </Button>
                    </Link>
                </ButtonGroup>
                <ButtonGroup className="me-2" aria-label="Toggle Notification Menu">
                    <Button variant="outline-primary" onClick={() => {

                        dispatch({type: "toggleNotifications", payload: {
                            ...state,
                            toggleNotifications: !state.toggleNotifications
                        }});

                    }}>
                        Toggle Notification
                    </Button>
                </ButtonGroup>
            </ButtonToolbar>
        </>
    );

}
