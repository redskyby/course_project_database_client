import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux";
import { InterfaceForPosition } from "../services/interfaceForPosition";

const PositionTable = () => {
    const positions: InterfaceForPosition[] = useSelector((state: RootState) => state.PositionToolKit.positions);
    const [load, setLoad] = useState<boolean>(false);

    return (
        <Container>
            <Row className="mt-2" xs="auto">
                <Col>
                    <Button variant="primary">Добавить</Button>
                </Col>
                <Col>
                    <Button variant="primary">Редактировать</Button>
                </Col>
                <Col>
                    <Button variant="primary">Удалить</Button>
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
                                <td>{position.access}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            ) : (
                <h2>Данные отсутствуют или проверьте соединение с интернетом...</h2>
            )}
        </Container>
    );
};

export default PositionTable;
