import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import { InterfaceForPosition } from "../../../services/interfaceForPosition";
import PositionApi from "../../../api/PositionApi";

const AddPosition = ({
    show,
    setShow,
    setLoad,
}: {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    setLoad: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const [name, setName] = useState<string>("");
    const [salary, setSalary] = useState<number>(0);
    const [access, setAccess] = useState<number>(0);

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (!name || salary <= 0) {
            alert("Пожалуйста, заполните все поля корректно.");
            return;
        } else {
            const formData: InterfaceForPosition = {
                name,
                salary,
                access,
            };
            setShow(false);

            PositionApi.addPosition(formData)
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
                <Modal.Title>Добавить работу</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row>
                        <Col>
                            <Form.Group controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="nameSupplier">
                                <Form.Label>Salary</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={salary}
                                    onChange={(e) => setSalary(parseInt(e.target.value))}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="access">
                                <Form.Label>Access</Form.Label>
                                <Form.Select
                                    value={access}
                                    onChange={(e) => setAccess(parseInt(e.target.value))}
                                    required
                                >
                                    <option value="">Select type of access</option>
                                    <option value="0">false</option>
                                    <option value="1">true</option>
                                </Form.Select>
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
                    Сохранить
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddPosition;
