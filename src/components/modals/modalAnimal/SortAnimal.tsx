import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import AnimalApi from "../../../api/AnimalApi";
import { AnimalInterface } from "../../../services/interfaces/interfacesForAnimals";
import { SET_ANIMALS } from "../../../redux/slice/AnimalSlice";
import { useDispatch } from "react-redux";

const SortAnimal = ({
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
        AnimalApi.sortAnimals(sort)
            .then((data: AnimalInterface[]) => {
                setShow(false);
                setLoad(false);
                dispatch(SET_ANIMALS(data));
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
                                    <option value="species">Species</option>
                                    <option value="gender">Gender</option>
                                    <option value="height">Height</option>
                                    <option value="weight">Weight</option>
                                    <option value="date">Date</option>
                                    <option value="age">Age</option>
                                    <option value="typeOfFeed">Type of Feed</option>
                                    <option value="naturalArea">Natural Area</option>
                                    <option value="cageNum">Cage Number</option>
                                    <option value="offSpring">Offspring</option>
                                    <option value="numOffSpring">Number of Offspring</option>
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

export default SortAnimal;
