import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { FormDatForAddAnimalModal } from "../../../services/interfaces";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import AnimalApi from "../../../api/AnimalApi";

const EditAnimal = ({
    show,
    setShow,
    setLoad,
}: {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    setLoad: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const [id, setId] = useState<number>(0);
    const [name, setName] = useState<string>("");
    const [species, setSpecies] = useState<string>("");
    const [gender, setGender] = useState<string>("");
    const [height, setHeight] = useState<string>("");
    const [weight, setWeight] = useState<string>("");
    const [date, setDate] = useState<string>("");
    const [age, setAge] = useState<number>(0);
    const [typeOfFeed, setTypeOfFeed] = useState<string>("");
    const [naturalArea, setNaturalArea] = useState<string>("");
    const [cageNum, setCageNum] = useState<number>(0);
    const [offspring, setOffspring] = useState<number>(0);
    const [numOffSpring, setNumOffSpring] = useState<number>(0);

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        // Проверка на пустые значения или отрицательные числа
        if (
            !name ||
            !species ||
            !gender ||
            !height ||
            !weight ||
            !date ||
            age <= 0 ||
            cageNum <= 0 ||
            offspring < 0 ||
            numOffSpring < 0
        ) {
            // Можно вывести сообщение об ошибке или выполнить другие действия
            alert("Пожалуйста, заполните все поля корректно.");
            return;
        } else {
            // Создание объекта formData
            const formData: FormDatForAddAnimalModal = {
                name,
                species,
                gender,
                height,
                weight,
                date,
                age,
                typeOfFeed,
                naturalArea,
                cageNum,
                offspring,
                numOffSpring,
            };
            setShow(false);

            AnimalApi.addAnimal(formData)
                .then(() => {
                    setShow(false);
                    setLoad(true);
                })
                .catch((e) => {
                    console.log(e.message);
                });
        }
    };

    return (
        <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Редактировать животное</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row>
                        <Col>
                            <Form.Group controlId="id">
                                <Form.Label>Id животного</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={id}
                                    onChange={(e) => setId(parseInt(e.target.value))}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="species">
                                <Form.Label>Species</Form.Label>
                                <Form.Select value={species} onChange={(e) => setSpecies(e.target.value)} required>
                                    <option value="">Select Species</option>
                                    <option value="predator">Predator</option>
                                    <option value="herbivore">Herbivore</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group controlId="gender">
                                <Form.Label>Gender</Form.Label>
                                <Form.Control
                                    as="select"
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                    required
                                >
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="height">
                                <Form.Label>Height</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={height}
                                    onChange={(e) => setHeight(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="weight">
                                <Form.Label>Weight</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="date">
                                <Form.Label>Date</Form.Label>
                                <Form.Control
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="age">
                                <Form.Label>Age</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={age}
                                    onChange={(e) => setAge(parseInt(e.target.value))}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="typeOfFeed">
                                <Form.Label>Type of Feed</Form.Label>
                                <Form.Control
                                    as="select"
                                    value={typeOfFeed}
                                    onChange={(e) => setTypeOfFeed(e.target.value)}
                                    required
                                >
                                    <option value="">Select Type of Feed</option>
                                    <option value="meat">Meat</option>
                                    <option value="herb">Herb</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="naturalArea">
                                <Form.Label>Natural Area</Form.Label>
                                <Form.Select
                                    value={naturalArea}
                                    onChange={(e) => setNaturalArea(e.target.value)}
                                    required
                                >
                                    <option value="">Select Natural Area</option>
                                    <option value="forest">Forest</option>
                                    <option value="grassland">Grassland</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group controlId="cageNum">
                                <Form.Label>Cage Number</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={cageNum}
                                    onChange={(e) => setCageNum(parseInt(e.target.value))}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="offspring">
                                <Form.Label>Offspring</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={offspring}
                                    onChange={(e) => setOffspring(parseInt(e.target.value))}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="numOffSpring">
                                <Form.Label>Number of Offspring</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={numOffSpring}
                                    onChange={(e) => setNumOffSpring(parseInt(e.target.value))}
                                    required
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setShow(false)}>
                    Закрыть
                </Button>
                <Button variant="primary" onClick={(e) => handleSubmit(e)}>
                    Сохранить
                </Button>
            </Modal.Footer>
        </Modal>
    );
};
export default EditAnimal;
