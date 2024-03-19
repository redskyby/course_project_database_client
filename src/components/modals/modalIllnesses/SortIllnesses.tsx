import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import IllnessesApi from "../../../api/IllnessesApi";
import { InterfacesForIllnesses } from "../../../services/interfaces/interfacesForIllnesses";
import { SET_ILLNESSES } from "../../../redux/slice/IllnessesSlice";

const SortIllnesses = ({
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
        IllnessesApi.sortIllnesses(sort)
            .then((data: InterfacesForIllnesses[]) => {
                setShow(false);
                setLoad(true);
                dispatch(SET_ILLNESSES(data));
            })
            .catch((e) => {
                console.log(e.message);
            })
            .finally(() => setLoad(false));
    };

    return (
        <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Сортировать по:</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row>
                        <Col>
                            <Form.Group controlId="sort">
                                <Form.Label>Сортировать по:</Form.Label>
                                <Form.Select value={sort} onChange={(e) => SetSort(e.target.value)} required>
                                    <option value="">Sort By</option>
                                    <option value="idAnimal">ID</option>
                                    <option value="name">Name</option>
                                    <option value="date">Date</option>
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
                    Сортировать
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default SortIllnesses;
