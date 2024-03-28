import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { InterfaceForEmployees } from "../../../services/interfaces/interfaceForEmployees";
import EmployeesApi from "../../../api/EmployeesApi";

const AddEmployee = ({
    show,
    setShow,
    setLoad,
}: {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    setLoad: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const [name, setName] = useState<string>("");
    const [surname, setSurname] = useState<string>("");
    const [gender, setGender] = useState<string>("");
    const [idPosition, setIdPosition] = useState<number>(0);
    const [date, setDate] = useState<string>("");
    const [age, setAge] = useState<number>(0);

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        // Проверка на пустые значения или отрицательные числа
        if (!name || !surname || !gender || idPosition <= 0 || !date || age <= 0) {
            // Можно вывести сообщение об ошибке или выполнить другие действия
            alert("Пожалуйста, заполните все поля корректно.");
            return;
        } else {
            // Создание объекта formData
            const formData: InterfaceForEmployees = {
                name,
                surname,
                gender,
                idPosition,
                date,
                age,
            };
            setShow(false);

            EmployeesApi.addEmployee(formData)
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
                <Modal.Title>Добавить работника</Modal.Title>
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
                            <Form.Group controlId="surname">
                                <Form.Label>Surname</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={surname}
                                    onChange={(e) => setSurname(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="gender">
                                <Form.Label>Gender</Form.Label>
                                <Form.Control
                                    as="select"
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                    required
                                >
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="idPosition">
                                <Form.Label>Id Position</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={idPosition}
                                    onChange={(e) => setIdPosition(parseInt(e.target.value))}
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
                            <Form.Group controlId="age">
                                <Form.Label>Age</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={age}
                                    onChange={(e) => setAge(parseInt(e.target.value))}
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

export default AddEmployee;
