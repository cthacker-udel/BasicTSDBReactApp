import React from "react";
import { Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";

export const DatabaseOperationControlPanel = () => {

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
                    <Link to="query-db">
                        <Button variant="outline-primary">
                            Query DB
                        </Button>
                    </Link>
                </ButtonGroup>
                <ButtonGroup className="me-2" aria-label="Insert data into DB button">
                    <Link to="insert-db">
                        <Button variant="outline-primary">
                            Insert Data into DB
                        </Button>
                    </Link>
                </ButtonGroup>
                <ButtonGroup className="me-2" aria-label="Clear database button">
                    <Button variant="outline-primary">
                        Clear DB
                    </Button>
                </ButtonGroup>
            </ButtonToolbar>
        </>
    );

}
