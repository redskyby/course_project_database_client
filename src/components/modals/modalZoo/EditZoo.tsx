import React, { useState } from "react";
import { InterfaceForVaccination } from "../../../services/interfaces/interfaceForVaccination";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ZoosApi from "../../../api/ZoosApi";

const EditZoo = ({
    show,
    setShow,
    setLoad,
}: {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    setLoad: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const [date, setDate] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [idAnimal, setIdAnimal] = useState<number>(0);

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (!date || !name || idAnimal <= 0) {
            alert("Пожалуйста, заполните все поля корректно.");
            return;
        } else {
            const formData: InterfaceForVaccination = {
                date: date,
                name: name,
                idAnimal: idAnimal,
            };
            setShow(false);

            ZoosApi.editZoo(formData)
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
                <Modal.Title>Редактировать зоопарк</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row>
                        <Col>
                            <Form.Group controlId="data">
                                <Form.Label>Data</Form.Label>
                                <Form.Control
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
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

export default EditZoo;
