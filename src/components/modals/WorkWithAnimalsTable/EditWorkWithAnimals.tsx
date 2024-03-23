import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import WorkWithAnimalsApi from "../../../api/WorkWithAnimalsApi";
import { InterfaceForWorkWithAnimals } from "../../../services/interfaces/interfaceForWorkWithAnimals";

const EditWorkWithAnimals = ({
    show,
    setShow,
    setLoad,
}: {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    setLoad: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const [dateFrom, setDateFrom] = useState<string>("");
    const [dateTo, setDateTo] = useState<string>("");
    const [idAnimal, setIdAnimal] = useState<number>(0);
    const [idPosition, setIdPosition] = useState<number>(0);

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (!dateFrom || !dateTo || idPosition <= 0 || idAnimal <= 0) {
            alert("Пожалуйста, заполните все поля корректно.");
            return;
        } else {
            const formData: InterfaceForWorkWithAnimals = {
                dateFrom: dateFrom,
                dateTo: dateTo,
                idPosition: idPosition,
                idAnimal: idAnimal,
            };
            setShow(false);

            WorkWithAnimalsApi.editWithAnimals(formData)
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
                <Modal.Title>Редактировать работу</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row>
                        <Col>
                            <Form.Group controlId="data">
                                <Form.Label>Data</Form.Label>
                                <Form.Control
                                    type="date"
                                    value={dateFrom}
                                    onChange={(e) => setDateFrom(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="data">
                                <Form.Label>Data</Form.Label>
                                <Form.Control
                                    type="date"
                                    value={dateTo}
                                    onChange={(e) => setDateTo(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="idAnimal">
                                <Form.Label>Id animal</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={idAnimal}
                                    onChange={(e) => setIdAnimal(parseInt(e.target.value))}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="idAnimal">
                                <Form.Label>Id position</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={idPosition}
                                    onChange={(e) => setIdPosition(parseInt(e.target.value))}
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
                    Редактировать
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EditWorkWithAnimals;
