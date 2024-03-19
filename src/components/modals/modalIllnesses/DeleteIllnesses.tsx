import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import IllnessesApi from "../../../api/IllnessesApi";

const DeleteIllnesses = ({
    show,
    setShow,
    setLoad,
}: {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    setLoad: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const [idAnimal, setIdAnimal] = useState<number>(0);
    const [date, setDate] = useState<string>("");
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (idAnimal <= 0 || !date) {
            alert("Пожалуйста, заполните все поля корректно.");
            return;
        } else {
            setShow(false);

            IllnessesApi.deleteIllnesses(idAnimal, date)
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
                <Modal.Title>Удалить болезнь</Modal.Title>
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
                            <Form.Group controlId="data">
                                <Form.Label>Data</Form.Label>
                                <Form.Control
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
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
                    Удалить
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteIllnesses;
