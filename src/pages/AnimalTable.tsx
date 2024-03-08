import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import AnimalApi from "../api/AnimalApi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux";
import { SET_ANIMALS } from "../redux/slice/AnimalSlice";

const AnimalTable = () => {
    const dispatch = useDispatch();
    const animal = useSelector((state: RootState) => state.AnimalToolKit.animals);

    // const animal = [
    //     {
    //         name: "sharick",
    //         species: "Cat",
    //         gender: "Female",
    //         height: 30,
    //         weight: 4,
    //         date: "2023-03-15",
    //         age: 2,
    //         typeOfFeed: "meat",
    //         naturalArea: "Indoor",
    //         cageNum: "13",
    //         offSpring: null,
    //         numOffSpring: 0,
    //         idMale: null,
    //         idFemale: null,
    //     }
    // ];

    useEffect(() => {
        AnimalApi.getAllAnimals()
            .then((data) => {
                dispatch(SET_ANIMALS(data));
            })
            .catch((e) => console.log(e.message));
    }, []);

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
                            <td>{animal.date}</td>
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
        </Container>
    );
};

export default AnimalTable;
