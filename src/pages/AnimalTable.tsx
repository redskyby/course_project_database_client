import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import AnimalApi from "../api/AnimalApi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux";
import { SET_ANIMALS } from "../redux/slice/AnimalSlice";
import { localDate } from "../services/localDate";
import { AnimalInterface } from "../services/interfacesForAnimals";
import AddAnimal from "../components/modals/modalAddAnimal/AddAnimal";
import EditAnimal from "../components/modals/modalAddAnimal/EditAnimal";
import DeleteAnimal from "../components/modals/modalAddAnimal/DeleteAnimal";
import SortAnimal from "../components/modals/modalAddAnimal/SortAnimal";

const AnimalTable = () => {
    const dispatch = useDispatch();
    const animal: AnimalInterface[] = useSelector((state: RootState) => state.AnimalToolKit.animals);
    const [showAddAnimal, setShowAddAnimal] = useState<boolean>(false);
    const [showEditAnimal, setShowEditAnimal] = useState<boolean>(false);
    const [showDeleteAnimal, setShowDeleteAnimal] = useState<boolean>(false);
    const [showSortAnimal, setShowSortAnimal] = useState<boolean>(false);
    const [load, setLoad] = useState<boolean>(false);

    useEffect(() => {
        AnimalApi.getAllAnimals()
            .then((data) => {
                dispatch(SET_ANIMALS(data));
            })
            .catch((e) => console.log(e.message));
    }, []);

    useEffect(() => {
        AnimalApi.getAllAnimals()
            .then((data: AnimalInterface[]) => {
                setLoad(false);
                dispatch(SET_ANIMALS(data));
            })
            .catch((e) => console.log(e.message))
            .finally(() => setLoad(false));
    }, [load]);

    const addAnimalModalShow = () => setShowAddAnimal(true);
    const editAnimalModalShow = () => setShowEditAnimal(true);
    const deleteAnimalModalShow = () => setShowDeleteAnimal(true);
    const sortAnimalModalShow = () => setShowSortAnimal(true);

    return (
        <Container>
            <Row className="mt-2" xs="auto">
                <Col>
                    <Button variant="primary" onClick={addAnimalModalShow}>
                        Добавить
                    </Button>
                </Col>
                <Col>
                    <Button variant="primary" onClick={editAnimalModalShow}>
                        Редактировать
                    </Button>
                </Col>
                <Col>
                    <Button variant="primary" onClick={deleteAnimalModalShow}>
                        Удалить
                    </Button>
                </Col>
                <Col>
                    <Button variant="primary" onClick={sortAnimalModalShow}>
                        Фильтр
                    </Button>
                </Col>
            </Row>
            {animal.length !== 0 ? (
                <Table striped bordered hover responsive className="mt-2">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>id</th>
                            <th>name</th>
                            <th>species</th>
                            <th>gender</th>
                            <th>height</th>
                            <th>weight</th>
                            <th>date</th>
                            <th>age</th>
                            <th>type of feed</th>
                            <th>natural area</th>
                            <th>cage num</th>
                            <th>offspring</th>
                            <th>num offspring</th>
                            <th>idMale</th>
                            <th>idFemale</th>
                        </tr>
                    </thead>
                    <tbody>
                        {animal.map((animal, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{animal.id}</td>
                                <td>{animal.name}</td>
                                <td>{animal.species}</td>
                                <td>{animal.gender}</td>
                                <td>{animal.height}</td>
                                <td>{animal.weight}</td>
                                <td>{localDate(animal.date)}</td>
                                <td>{animal.age}</td>
                                <td>{animal.typeOfFeed}</td>
                                <td>{animal.naturalArea}</td>
                                <td>{animal.cageNum}</td>
                                <td>{animal.offspring}</td>
                                <td>{animal.numOffspring}</td>
                                <td>{animal.idMale !== null ? animal.idMale : "null"}</td>
                                <td>{animal.idFemale !== null ? animal.idFemale : "null"}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            ) : (
                <h2>Данные отсутствуют или проверьте соединение с интернетом...</h2>
            )}
            <AddAnimal show={showAddAnimal} setShow={setShowAddAnimal} setLoad={setLoad} />
            <EditAnimal show={showEditAnimal} setShow={setShowEditAnimal} setLoad={setLoad} />
            <DeleteAnimal show={showDeleteAnimal} setShow={setShowDeleteAnimal} setLoad={setLoad} />
            <SortAnimal show={showSortAnimal} setShow={setShowSortAnimal} setLoad={setLoad} />
        </Container>
    );
};

export default AnimalTable;
