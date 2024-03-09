import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import AnimalApi from "../../../api/AnimalApi";

const DeleteAnimal = ({
    show,
    setShow,
    setLoad,
}: {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    setLoad: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const [id, setId] = useState<number>(0);

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        // Проверка на пустые значения или отрицательные числа
        if (!id || id <= 0) {
            // Можно вывести сообщение об ошибке или выполнить другие действия
            alert("Пожалуйста, заполните все поля корректно.");
            return;
        } else {
            setShow(false);
            AnimalApi.editAnimal(formData)
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
                <Modal.Title>Удалить животное животное</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row>
                        <Col>
                            <Form.Group controlId="id">
                                <Form.Label>Id животного</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={id}
                                    onChange={(e) => setId(parseInt(e.target.value))}
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

export default DeleteAnimal;
