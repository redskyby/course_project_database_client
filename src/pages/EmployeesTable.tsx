import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { localDate } from "../services/localDate";
import EditZoo from "../components/modals/modalZoo/EditZoo";
import SortZoo from "../components/modals/modalZoo/SortZoo";
import EmployeesApi from "../api/EmployeesApi";
import { InterfaceForEmployees } from "../services/interfaces/interfaceForEmployees";
import { SET_EMPLOYEES } from "../redux/slice/EmployeesSlice";
import AddEmployee from "../components/modals/modalEmployees/AddEmployee";
import DeleteEmployee from "../components/modals/modalEmployees/DeleteEmployee";

const EmployeesTable = () => {
    const dispatch = useDispatch();
    const employees: InterfaceForEmployees[] = useSelector((state: RootState) => state.EmployeesToolKit.employees);

    const [load, setLoad] = useState<boolean>(false);
    const [showAddEmployees, setShowAddEmployees] = useState<boolean>(false);
    const [showEditEmployees, setShowEditEmployees] = useState<boolean>(false);
    const [showDeleteEmployees, setShowDeleteEmployees] = useState<boolean>(false);
    const [showSortEmployees, setShowSortEmployees] = useState<boolean>(false);

    useEffect(() => {
        EmployeesApi.getAllEmployees()
            .then((data: InterfaceForEmployees[]) => {
                dispatch(SET_EMPLOYEES(data));
            })
            .catch((e) => console.log(e.message));
    }, []);

    useEffect(() => {
        EmployeesApi.getAllEmployees()
            .then((data: InterfaceForEmployees[]) => {
                dispatch(SET_EMPLOYEES(data));
                setLoad(false);
            })
            .catch((e) => console.log(e.message))
            .finally(() => setLoad(false));
    }, [load]);

    const addEmployeesModalShow = () => setShowAddEmployees(true);
    const editEmployeesModalShow = () => setShowEditEmployees(true);
    const deleteEmployeesModalShow = () => setShowDeleteEmployees(true);
    const sortEmployeesModalShow = () => setShowSortEmployees(true);

    return (
        <Container>
            <Row className="mt-2" xs="auto">
                <Col>
                    <Button variant="primary" onClick={addEmployeesModalShow}>
                        Добавить
                    </Button>
                </Col>
                <Col>
                    <Button variant="primary" onClick={editEmployeesModalShow}>
                        Редактировать
                    </Button>
                </Col>
                <Col>
                    <Button variant="primary" onClick={deleteEmployeesModalShow}>
                        Удалить
                    </Button>
                </Col>
                <Col>
                    <Button variant="primary" onClick={sortEmployeesModalShow}>
                        Фильтр
                    </Button>
                </Col>
            </Row>
            {employees.length !== 0 ? (
                <Table striped bordered hover responsive className="mt-2">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>id</th>
                            <th>name</th>
                            <th>surname</th>
                            <th>gender</th>
                            <th>Id Position</th>
                            <th>date</th>
                            <th>age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee, index) => (
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.surname}</td>
                                <td>{employee.gender}</td>
                                <td>{employee.idPosition}</td>
                                <td>{localDate(employee.date)}</td>
                                <td>{employee.age}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            ) : (
                <h2>Данные отсутствуют или проверьте соединение с интернетом...</h2>
            )}
            <AddEmployee show={showAddEmployees} setShow={setShowAddEmployees} setLoad={setLoad} />
            <EditZoo show={showEditEmployees} setShow={setShowEditEmployees} setLoad={setLoad} />
            <DeleteEmployee show={showDeleteEmployees} setShow={setShowDeleteEmployees} setLoad={setLoad} />
            <SortZoo show={showSortEmployees} setShow={setShowSortEmployees} setLoad={setLoad} />
        </Container>
    );
};

export default EmployeesTable;
