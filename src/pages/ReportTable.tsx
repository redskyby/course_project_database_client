import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import GetReport from "../components/modals/modalReport/GetReport";

const ReportTable = () => {
    const [showReport, setShowReport] = useState<boolean>(false);
    const [load, setLoad] = useState<boolean>(false);

    const getReport = () => setShowReport(true);

    return (
        <Container>
            <Row className="mt-2" xs="auto">
                <Col>
                    <Button variant="primary" onClick={getReport}>
                        Получить отчет
                    </Button>
                </Col>
            </Row>
            <GetReport show={showReport} setShow={setShowReport} setLoad={setLoad} />
        </Container>
    );
};

export default ReportTable;
