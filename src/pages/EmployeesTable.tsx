import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InterfaceForZoos } from "../services/interfaces/interfaceForZoos";
import { RootState } from "../redux";
import ZoosApi from "../api/ZoosApi";
import { SET_ZOOS } from "../redux/slice/ZoosSlice";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { localDate } from "../services/localDate";
import AddZoo from "../components/modals/modalZoo/AddZoo";
import EditZoo from "../components/modals/modalZoo/EditZoo";
import DeleteZoo from "../components/modals/modalZoo/DeleteZoo";
import SortZoo from "../components/modals/modalZoo/SortZoo";

const EmployeesTable = () => {
    const dispatch = useDispatch();
    const zoos: InterfaceForZoos[] = useSelector((state: RootState) => state.ZoosToolKit.zoos);

    const [load, setLoad] = useState<boolean>(false);
    const [showAddZoos, setShowAddZoos] = useState<boolean>(false);
    const [showEditZoos, setShowEditZoos] = useState<boolean>(false);
    const [showDeleteZoos, setShowDeleteZoos] = useState<boolean>(false);
    const [showSortZoos, setShowSortZoos] = useState<boolean>(false);

    useEffect(() => {
        ZoosApi.getAllZoos()
            .then((data: InterfaceForZoos[]) => {
                dispatch(SET_ZOOS(data));
            })
            .catch((e) => console.log(e.message));
    }, []);

    useEffect(() => {
        ZoosApi.getAllZoos()
            .then((data: InterfaceForZoos[]) => {
                dispatch(SET_ZOOS(data));
                setLoad(false);
            })
            .catch((e) => console.log(e.message))
            .finally(() => setLoad(false));
    }, [load]);

    const addZoosModalShow = () => setShowAddZoos(true);
    const editZoosModalShow = () => setShowEditZoos(true);
    const deleteZoosModalShow = () => setShowDeleteZoos(true);
    const sortZoosModalShow = () => setShowSortZoos(true);

    return (
        <Container>
            <Row className="mt-2" xs="auto">
                <Col>
                    <Button variant="primary" onClick={addZoosModalShow}>
                        Добавить
                    </Button>
                </Col>
                <Col>
                    <Button variant="primary" onClick={editZoosModalShow}>
                        Редактировать
                    </Button>
                </Col>
                <Col>
                    <Button variant="primary" onClick={deleteZoosModalShow}>
                        Удалить
                    </Button>
                </Col>
                <Col>
                    <Button variant="primary" onClick={sortZoosModalShow}>
                        Фильтр
                    </Button>
                </Col>
            </Row>
            {zoos.length !== 0 ? (
                <Table striped bordered hover responsive className="mt-2">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>id</th>
                            <th>date</th>
                            <th>name</th>
                            <th>idAnimal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {zoos.map((zoo, index) => (
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{zoo.id}</td>
                                <td>{localDate(zoo.date)}</td>
                                <td>{zoo.name}</td>
                                <td>{zoo.idAnimal}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            ) : (
                <h2>Данные отсутствуют или проверьте соединение с интернетом...</h2>
            )}
            <AddZoo show={showAddZoos} setShow={setShowAddZoos} setLoad={setLoad} />
            <EditZoo show={showEditZoos} setShow={setShowEditZoos} setLoad={setLoad} />
            <DeleteZoo show={showDeleteZoos} setShow={setShowDeleteZoos} setLoad={setLoad} />
            <SortZoo show={showSortZoos} setShow={setShowSortZoos} setLoad={setLoad} />
        </Container>
    );
};

export default EmployeesTable;
