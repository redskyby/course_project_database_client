import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { InterfaceForVaccination } from "../../../services/interfaces/interfaceForVaccination";
import VaccinationApi from "../../../api/VaccinationApi";
import ReportApi from "../../../api/ReportApi";

const GetReport = ({
    show,
    setShow,
    setLoad,
}: {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    setLoad: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const [idAnimal, setIdAnimal] = useState<number>(0);
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (idAnimal <= 0 ) {
            alert("Пожалуйста, заполните все поля корректно.");
            return;
        } else {
            setShow(false);

            ReportApi.getReport(idAnimal)
                .then(() => {
                    setShow(false);
                    setLoad(true);
                })
                .catch((e) => {
                    console.log(e.message);
                });
        }
    };

    return (
        <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Отчет о животном</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row>
                        <Col>
                            <Form.Group controlId="idAnimal">
                                <Form.Label>Id animal</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={idAnimal}
                                    onChange={(e) => setIdAnimal(parseInt(e.target.value))}
                                    required
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setShow(false)}>
                    Закрыть
                </Button>
                <Button variant="primary" onClick={(e) => handleSubmit(e)}>
                    Получить отчет
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default GetReport;
