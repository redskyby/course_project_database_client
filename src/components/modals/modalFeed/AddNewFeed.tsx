import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import { IntefracesForFeed } from "../../../services/interfaces/intefracesForFeed";
import FeedApi from "../../../api/FeedApi";

const AddNewFeed = ({
    show,
    setShow,
    setLoad,
}: {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    setLoad: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const [name, setName] = useState<string>("");
    const [nameSupplier, setNameSupplier] = useState<string>("");
    const [typeOfFeed, setTypeOfFeed] = useState<string>("");
    const [size, setSize] = useState<number>(0);
    const [price, setPrice] = useState<number>(0);
    const [date, setDate] = useState<string>("");

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (!name || !nameSupplier || !typeOfFeed || size <= 0 || price <= 0 || !date) {
            alert("Пожалуйста, заполните все поля корректно.");
            return;
        } else {
            const formData: IntefracesForFeed = {
                name,
                nameSupplier,
                typeOfFeed,
                size,
                price,
                date,
            };
            setShow(false);

            FeedApi.addFeed(formData)
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
                <Modal.Title>Добавить корм</Modal.Title>
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
                                <Form.Label>Name supplier</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={nameSupplier}
                                    onChange={(e) => setNameSupplier(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="typeOfFeed">
                                <Form.Label>Type of feed</Form.Label>
                                <Form.Select
                                    value={typeOfFeed}
                                    onChange={(e) => setTypeOfFeed(e.target.value)}
                                    required
                                >
                                    <option value="">Select type of feed</option>
                                    <option value="dry">dry</option>
                                    <option value="wet">wet</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group controlId="size">
                                <Form.Label>Size</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={size}
                                    onChange={(e) => setSize(parseInt(e.target.value))}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="price">
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={price}
                                    onChange={(e) => setPrice(parseInt(e.target.value))}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="date">
                                <Form.Label>Date</Form.Label>
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
                    Сохранить
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddNewFeed;
