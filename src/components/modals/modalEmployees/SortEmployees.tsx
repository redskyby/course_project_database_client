import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import EmployeesApi from "../../../api/EmployeesApi";
import { InterfaceForEmployees } from "../../../services/interfaces/interfaceForEmployees";
import { SET_EMPLOYEES } from "../../../redux/slice/EmployeesSlice";

const SortEmployees = ({
    show,
    setShow,
    setLoad,
}: {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    setLoad: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const [sort, SetSort] = useState<string>("");
    const dispatch = useDispatch();

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        EmployeesApi.sortEmployees(sort)
            .then((data: InterfaceForEmployees[]) => {
                setShow(false);
                setLoad(false);
                dispatch(SET_EMPLOYEES(data));
            })
            .catch((e) => console.log(e.message))
            .finally(() => setLoad(false));
    };

    return (
        <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Сортировка</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row>
                        <Col>
                            <Form.Group controlId="sort">
                                <Form.Label>Сортировать по:</Form.Label>
                                <Form.Select value={sort} onChange={(e) => SetSort(e.target.value)} required>
                                    <option value="">Sort By</option>
                                    <option value="id">ID</option>
                                    <option value="name">Name</option>
                                    <option value="surname">Surname</option>
                                    <option value="gender">Gender</option>
                                    <option value="idPosition">Id Position</option>
                                    <option value="date">Date</option>
                                    <option value="age">Age</option>
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
                    Отсортировать
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default SortEmployees;
