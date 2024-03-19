import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux";
import { localDate } from "../services/localDate";
import AddVaccination from "../components/modals/modalVaccination/AddVaccination";
import DeleteVaccination from "../components/modals/modalVaccination/DeleteVaccination";
import SortVaccination from "../components/modals/modalVaccination/SortVaccination";
import EditVaccination from "../components/modals/modalVaccination/EditVaccination";
import { SET_ILLNESSES } from "../redux/slice/IllnessesSlice";
import { InterfacesForIllnesses } from "../services/interfaces/interfacesForIllnesses";
import IllnessesApi from "../api/IllnessesApi";
import AddIllnesses from "../components/modals/modalIllnesses/AddIllnesses";

const IllnessesTable = () => {
    const dispatch = useDispatch();
    const illnesses: InterfacesForIllnesses[] = useSelector((state: RootState) => state.IllnessesToolKit.illnesses);

    const [load, setLoad] = useState<boolean>(false);
    const [showAddIllnesses, setShowAddIllnesses] = useState<boolean>(false);
    const [showEditIllnesses, setShowEditIllnesses] = useState<boolean>(false);
    const [showDeleteIllnesses, setShowDeleteIllnesses] = useState<boolean>(false);
    const [showSortIllnesses, setShowSortIllnesses] = useState<boolean>(false);

    useEffect(() => {
        IllnessesApi.getAllIllnesses()
            .then((data: InterfacesForIllnesses[]) => {
                dispatch(SET_ILLNESSES(data));
            })
            .catch((e) => console.log(e.message));
    }, []);

    useEffect(() => {
        IllnessesApi.getAllIllnesses()
            .then((data: InterfacesForIllnesses[]) => {
                dispatch(SET_ILLNESSES(data));
                setLoad(false);
            })
            .catch((e) => console.log(e.message))
            .finally(() => setLoad(false));
    }, [load]);

    const addIllnessesModalShow = () => setShowAddIllnesses(true);
    const editIllnessesModalShow = () => setShowEditIllnesses(true);
    const deleteIllnessesModalShow = () => setShowDeleteIllnesses(true);
    const sortIllnessesModalShow = () => setShowSortIllnesses(true);

    return (
        <Container>
            <Row className="mt-2" xs="auto">
                <Col>
                    <Button variant="primary" onClick={addIllnessesModalShow}>
                        Добавить
                    </Button>
                </Col>
                <Col>
                    <Button variant="primary" onClick={editIllnessesModalShow}>
                        Редактировать
                    </Button>
                </Col>
                <Col>
                    <Button variant="primary" onClick={deleteIllnessesModalShow}>
                        Удалить
                    </Button>
                </Col>
                <Col>
                    <Button variant="primary" onClick={sortIllnessesModalShow}>
                        Фильтр
                    </Button>
                </Col>
            </Row>
            {illnesses.length !== 0 ? (
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
                        {illnesses.map((illness, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{localDate(illness.date)}</td>
                                <td>{illness.name}</td>
                                <td>{illness.idAnimal}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            ) : (
                <h2>Данные отсутствуют или проверьте соединение с интернетом...</h2>
            )}
            <AddIllnesses show={showAddIllnesses} setShow={setShowAddIllnesses} setLoad={setLoad} />
            {/*<EditVaccination show={showEditVaccination} setShow={setShowEditVaccination} setLoad={setLoad} />*/}
            {/*<DeleteVaccination show={showDeleteVaccination} setShow={setShowDeleteVaccination} setLoad={setLoad} />*/}
            {/*<SortVaccination show={showSortVaccination} setShow={setShowSortVaccination} setLoad={setLoad} />*/}
        </Container>
    );
};
export default IllnessesTable;
