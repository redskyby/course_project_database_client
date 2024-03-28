import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { localDate } from "../services/localDate";
import { InterfaceForWorkWithAnimals } from "../services/interfaces/interfaceForWorkWithAnimals";
import WorkWithAnimalsApi from "../api/WorkWithAnimalsApi";
import { SET_WorkWitAnimals } from "../redux/slice/WorkWithAnimalSlice";
import AddWorkWithAnimals from "../components/modals/modalWorkWithAnimals/AddWorkWithAnimals";
import DeleteWorkWithAnimals from "../components/modals/modalWorkWithAnimals/DeleteWorkWithAnimals";
import SortWorkWithAnimals from "../components/modals/modalWorkWithAnimals/SortWorkWithAnimals";
import EditWorkWithAnimals from "../components/modals/modalWorkWithAnimals/EditWorkWithAnimals";

const WorkWithAnimalsTable = () => {
    const dispatch = useDispatch();
    const workWithAnimals: InterfaceForWorkWithAnimals[] = useSelector(
        (state: RootState) => state.WorkWithAnimalsToolKit.workWithAnimals,
    );

    const [load, setLoad] = useState<boolean>(false);
    const [showAddWorkWithAnimalsTable, setShowAddWorkWithAnimalsTable] = useState<boolean>(false);
    const [showEditWorkWithAnimalsTable, setShowEditWorkWithAnimalsTable] = useState<boolean>(false);
    const [showDeleteWorkWithAnimalsTable, setShowDeleteWorkWithAnimalsTable] = useState<boolean>(false);
    const [showSortWorkWithAnimalsTable, setShowSortWorkWithAnimalsTable] = useState<boolean>(false);

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

    const addWorkWithAnimalsTableModalShow = () => setShowAddWorkWithAnimalsTable(true);
    const editWorkWithAnimalsTableModalShow = () => setShowEditWorkWithAnimalsTable(true);
    const deleteWorkWithAnimalsTableModalShow = () => setShowDeleteWorkWithAnimalsTable(true);
    const sortWorkWithAnimalsTableModalShow = () => setShowSortWorkWithAnimalsTable(true);

    return (
        <Container>
            <Row className="mt-2" xs="auto">
                <Col>
                    <Button variant="primary" onClick={addWorkWithAnimalsTableModalShow}>
                        Добавить
                    </Button>
                </Col>
                <Col>
                    <Button variant="primary" onClick={editWorkWithAnimalsTableModalShow}>
                        Редактировать
                    </Button>
                </Col>
                <Col>
                    <Button variant="primary" onClick={deleteWorkWithAnimalsTableModalShow}>
                        Удалить
                    </Button>
                </Col>
                <Col>
                    <Button variant="primary" onClick={sortWorkWithAnimalsTableModalShow}>
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
            <AddWorkWithAnimals
                show={showAddWorkWithAnimalsTable}
                setShow={setShowAddWorkWithAnimalsTable}
                setLoad={setLoad}
            />
            <EditWorkWithAnimals
                show={showEditWorkWithAnimalsTable}
                setShow={setShowEditWorkWithAnimalsTable}
                setLoad={setLoad}
            />
            <DeleteWorkWithAnimals
                show={showDeleteWorkWithAnimalsTable}
                setShow={setShowDeleteWorkWithAnimalsTable}
                setLoad={setLoad}
            />
            <SortWorkWithAnimals
                show={showSortWorkWithAnimalsTable}
                setShow={setShowSortWorkWithAnimalsTable}
                setLoad={setLoad}
            />
        </Container>
    );
};

export default WorkWithAnimalsTable;
