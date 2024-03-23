import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux";
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
import { InterfaceForWorkWithAnimals } from "../services/interfaces/interfaceForWorkWithAnimals";
import WorkWithAnimalsApi from "../api/WorkWithAnimalsApi";
import { SET_WorkWitAnimals } from "../redux/slice/WorkWithAnimalSlice";

const WorkWithAnimalsTable = () => {
    const dispatch = useDispatch();
    const workWithAnimals: InterfaceForWorkWithAnimals[] = useSelector(
        (state: RootState) => state.WorkWithAnimals.workWithAnimals,
    );

    const [load, setLoad] = useState<boolean>(false);
    const [showAddZoos, setShowAddZoos] = useState<boolean>(false);
    const [showEditZoos, setShowEditZoos] = useState<boolean>(false);
    const [showDeleteZoos, setShowDeleteZoos] = useState<boolean>(false);
    const [showSortZoos, setShowSortZoos] = useState<boolean>(false);

    useEffect(() => {
        WorkWithAnimalsApi.getAllWorkWithAnimals()
            .then((data: InterfaceForWorkWithAnimals[]) => {
                dispatch(SET_WorkWitAnimals(data));
            })
            .catch((e) => console.log(e.message));
    }, []);

    useEffect(() => {
        WorkWithAnimalsApi.getAllWorkWithAnimals()
            .then((data: InterfaceForWorkWithAnimals[]) => {
                dispatch(SET_WorkWitAnimals(data));
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
            {workWithAnimals.length !== 0 ? (
                <Table striped bordered hover responsive className="mt-2">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>id</th>
                            <th>Id position</th>
                            <th>Id animal</th>
                            <th>date from</th>
                            <th>date to</th>
                        </tr>
                    </thead>
                    <tbody>
                        {workWithAnimals.map((workWithAnimal, index) => (
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{workWithAnimal.id}</td>
                                <td>{workWithAnimal.idPosition}</td>
                                <td>{workWithAnimal.idAnimal}</td>
                                <td>{localDate(workWithAnimal.dateFrom)}</td>
                                <td>{localDate(workWithAnimal.dateTo)}</td>
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

export default WorkWithAnimalsTable;
