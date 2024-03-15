import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux";
import { InterfaceForPosition } from "../services/interfaceForPosition";
import PositionApi from "../api/PositionApi";
import { SET_POSITIONS } from "../redux/slice/PositionSlice";
import AddPosition from "../components/modals/modalPosition/AddPosition";
import DeletePosition from "../components/modals/modalPosition/DeletePosition";

const PositionTable = () => {
    const dispatch = useDispatch();
    const positions: InterfaceForPosition[] = useSelector((state: RootState) => state.PositionToolKit.positions);
    const [load, setLoad] = useState<boolean>(false);
    const [showAddPosition, setShowAddPosition] = useState<boolean>(false);
    const [showDeletePosition, setShowDeletePosition] = useState<boolean>(false);

    useEffect(() => {
        PositionApi.getAllPositions()
            .then((data: InterfaceForPosition[]) => {
                dispatch(SET_POSITIONS(data));
            })
            .catch((e) => console.log(e.message));
    }, []);

    useEffect(() => {
        PositionApi.getAllPositions()
            .then((data: InterfaceForPosition[]) => {
                dispatch(SET_POSITIONS(data));
                setLoad(false);
            })
            .catch((e) => console.log(e.message))
            .finally(() => setLoad(false));
    }, [load]);

    const addPositionModalShow = () => setShowAddPosition(true);
    const deletePositionModalShow = () => setShowDeletePosition(true);

    return (
        <Container>
            <Row className="mt-2" xs="auto">
                <Col>
                    <Button variant="primary" onClick={addPositionModalShow}>
                        Добавить
                    </Button>
                </Col>
                <Col>
                    <Button variant="primary">Редактировать</Button>
                </Col>
                <Col>
                    <Button variant="primary" onClick={deletePositionModalShow}>
                        Удалить
                    </Button>
                </Col>
                <Col>
                    <Button variant="primary">Фильтр</Button>
                </Col>
            </Row>
            {positions.length !== 0 ? (
                <Table striped bordered hover responsive className="mt-2">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>id</th>
                            <th>name</th>
                            <th>salary</th>
                            <th>access</th>
                        </tr>
                    </thead>
                    <tbody>
                        {positions.map((position, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{position.id}</td>
                                <td>{position.name}</td>
                                <td>{position.salary}</td>
                                <td>{position.access !== 0 ? "true" : "false"}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            ) : (
                <h2>Данные отсутствуют или проверьте соединение с интернетом...</h2>
            )}
            <AddPosition show={showAddPosition} setShow={setShowAddPosition} setLoad={setLoad} />
            <DeletePosition show={showDeletePosition} setShow={setShowDeletePosition} setLoad={setLoad} />
        </Container>
    );
};

export default PositionTable;
