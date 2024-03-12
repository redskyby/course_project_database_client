import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { IntefracesForFeed } from "../services/intefracesForFeed";
import { localDate } from "../services/localDate";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux";
import FeedApi from "../api/FeedApi";
import { SET_FEEDS } from "../redux/slice/FeedSlice";

const FeedTable = () => {
    const dispatch = useDispatch();
    const feeds: IntefracesForFeed[] = useSelector((state: RootState) => state.FeedToolKit.feeds);

    useEffect(() => {
        FeedApi.getAllFeeds()
            .then((data: IntefracesForFeed[]) => {
                dispatch(SET_FEEDS(data));
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
                <h2>Данные отсутствуют или проверьте соединение с интернетом...</h2>
            )}
        </Container>
    );
};

export default FeedTable;
