import React from "react";
import { Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap';

export const DatabaseOperationControlPanel = () => {

    return(
        <>
            <ButtonToolbar>
                <ButtonGroup className="me-2" aria-label="Load database button">
                    <Button variant="outline-primary">
                        Load DB
                    </Button>
                </ButtonGroup>
                <ButtonGroup className="me-2" aria-label="Query database button">
                    <Button variant="outline-primary">
                        Query DB
                    </Button>
                </ButtonGroup>
                <ButtonGroup className="me-2" aria-label="Insert data into DB button">
                    <Button variant="outline-primary">
                        Insert Data into DB
                    </Button>
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
