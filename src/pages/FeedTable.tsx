import React from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { IntefracesForFeed } from "../services/intefracesForFeed";
import { localDate } from "../services/localDate";

const FeedTable = () => {
    const feeds: IntefracesForFeed[] = [
        {
            id: 1,
            name: "Premium animal Food",
            nameSupplier: "Pet Supplies Inc.",
            typeOfFeed: "dry",
            size: "medium",
            price: 29.99,
            date: "2024-03-10",
        },
        {
            id: 2,
            name: "Premium dog Food",
            nameSupplier: "Pet Supplies Inc.",
            typeOfFeed: "dry",
            size: "medium",
            price: 29.99,
            date: "2024-03-10",
        },
    ];

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
            {feeds.length !== 0 ? (
                <Table striped bordered hover responsive className="mt-2">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>id</th>
                            <th>name</th>
                            <th>nameSupplier</th>
                            <th>typeOfFeed</th>
                            <th>size</th>
                            <th>price</th>
                            <th>date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {feeds.map((feed, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{feed.id}</td>
                                <td>{feed.name}</td>
                                <td>{feed.nameSupplier}</td>
                                <td>{feed.typeOfFeed}</td>
                                <td>{feed.size}</td>
                                <td>{feed.price}</td>
                                <td>{localDate(feed.date)}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            ) : (
                <h2>Данные отсутствую или проверьте соединение с интернетом...</h2>
            )}
        </Container>
    );
};

export default FeedTable;
