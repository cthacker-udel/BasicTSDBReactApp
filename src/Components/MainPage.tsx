import { Col, Container, Row } from "react-bootstrap";
import { DatabaseOperationControlPanel } from "./Panels/DatabaseOperationControlPanel";
import { NotificationPanel } from "./Panels/NotificationPanel";

export const MainPage = () => {

    return(
        <Container>
            <Row>
                <Col>
                    <NotificationPanel />
                </Col>
                <Col>
                    <DatabaseOperationControlPanel />
                </Col>
            </Row>
        </Container>
    );

};
