import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { FormDatForAddAnimalModal } from "../../../services/interfaces";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const AddAnimal = ({ show, setShow }: { show: boolean; setShow: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const [formData, setFormData] = useState<FormDatForAddAnimalModal>({
        name: "",
        species: "",
        gender: "",
        height: "",
        weight: "",
        date: "",
        age: 0,
        typeOfFeed: "",
        naturalArea: "",
        cageNum: 0,
        offspring: 0,
        numOffSpring: 0,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData); // Отправка данных, например, на сервер
    };

    return (
        <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Добавить животное</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/*forma*/}

                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                            <Form.Group controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="species">
                                <Form.Label>Species</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="species"
                                    value={formData.species}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="gender">
                                <Form.Label>Gender</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="height">
                                <Form.Label>Height</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="height"
                                    value={formData.height}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="weight">
                                <Form.Label>Weight</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="weight"
                                    value={formData.weight}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="date">
                                <Form.Label>Date</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="age">
                                <Form.Label>Age</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="age"
                                    value={formData.age.toString()}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="typeOfFeed">
                                <Form.Label>Type of Feed</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="typeOfFeed"
                                    value={formData.typeOfFeed}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="naturalArea">
                                <Form.Label>Natural Area</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="naturalArea"
                                    value={formData.naturalArea}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="cageNum">
                                <Form.Label>Cage Number</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="cageNum"
                                    value={formData.cageNum.toString()}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="offspring">
                                <Form.Label>Offspring</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="offspring"
                                    value={formData.offspring.toString()}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="numOffSpring">
                                <Form.Label>Number of Offspring</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="numOffSpring"
                                    value={formData.numOffSpring.toString()}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>

                {/*forma*/}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setShow(false)}>
                    Закрыть
                </Button>
                <Button variant="primary" onClick={() => setShow(false)}>
                    Сохранить
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddAnimal;
