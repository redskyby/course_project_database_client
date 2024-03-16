import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux";
import { InterfaceForPosition } from "../services/interfaces/interfaceForPosition";
import PositionApi from "../api/PositionApi";
import { SET_POSITIONS } from "../redux/slice/PositionSlice";
import { localDate } from "../services/localDate";

const VaccinationTable = () => {
    const dispatch = useDispatch();
    // const positions: InterfaceForPosition[] = useSelector((state: RootState) => state.PositionToolKit.positions);
    const vaccinations = [
        {
            date: "2022-09-09",
            name: "syper for cat",
            idAnimal: 65,
        },
        {
            date: "2022-09-09",
            name: "syper for cat",
            idAnimal: 67,
        },
    ];
    const [load, setLoad] = useState<boolean>(false);
    const [showAddVaccination, setShowAddVaccination] = useState<boolean>(false);
    const [showEditVaccination, setShowEditVaccination] = useState<boolean>(false);
    const [showDeleteVaccination, setShowDeleteVaccination] = useState<boolean>(false);
    const [showSortVaccination, setShowSortVaccination] = useState<boolean>(false);

    // useEffect(() => {
    //     PositionApi.getAllPositions()
    //         .then((data: InterfaceForPosition[]) => {
    //             dispatch(SET_POSITIONS(data));
    //         })
    //         .catch((e) => console.log(e.message));
    // }, []);

    // useEffect(() => {
    //     PositionApi.getAllPositions()
    //         .then((data: InterfaceForPosition[]) => {
    //             dispatch(SET_POSITIONS(data));
    //             setLoad(false);
    //         })
    //         .catch((e) => console.log(e.message))
    //         .finally(() => setLoad(false));
    // }, [load]);

    const addVaccinationModalShow = () => setShowAddVaccination(true);
    const editVaccinationModalShow = () => setShowEditVaccination(true);
    const deleteVaccinationModalShow = () => setShowDeleteVaccination(true);
    const sortVaccinationModalShow = () => setShowSortVaccination(true);

    return (
        <Container>
            <Row className="mt-2" xs="auto">
                <Col>
                    <Button variant="primary" onClick={addVaccinationModalShow}>
                        Добавить
                    </Button>
                </Col>
                <Col>
                    <Button variant="primary" onClick={editVaccinationModalShow}>
                        Редактировать
                    </Button>
                </Col>
                <Col>
                    <Button variant="primary" onClick={deleteVaccinationModalShow}>
                        Удалить
                    </Button>
                </Col>
                <Col>
                    <Button variant="primary" onClick={sortVaccinationModalShow}>
                        Фильтр
                    </Button>
                </Col>
            </Row>
            {vaccinations.length !== 0 ? (
                <Table striped bordered hover responsive className="mt-2">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>date</th>
                            <th>name</th>
                            <th>idAnimal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vaccinations.map((vaccination, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{localDate(vaccination.date)}</td>
                                <td>{vaccination.name}</td>
                                <td>{vaccination.idAnimal}</td>
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

export default VaccinationTable;
