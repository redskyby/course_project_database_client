import React, { useEffect, useState } from "react";
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
import AddNewFeed from "../components/modals/modalFeed/AddNewFeed";
import EditFeed from "../components/modals/modalFeed/EditFeed";
import DeleteFeed from "../components/modals/modalFeed/DeleteFeed";
import SortFeeds from "../components/modals/modalFeed/SortFeeds";

const FeedTable = () => {
    const dispatch = useDispatch();
    const feeds: IntefracesForFeed[] = useSelector((state: RootState) => state.FeedToolKit.feeds);
    const [load, setLoad] = useState<boolean>(false);
    const [showAddFeed, setShowAddFeed] = useState<boolean>(false);
    const [showEditFeed, setShowEditFeed] = useState<boolean>(false);
    const [showDeleteFeed, setShowDeleteFeed] = useState<boolean>(false);
    const [showSortFeed, setShowSortFeed] = useState<boolean>(false);

    useEffect(() => {
        FeedApi.getAllFeeds()
            .then((data: IntefracesForFeed[]) => {
                dispatch(SET_FEEDS(data));
            })
            .catch((e) => console.log(e.message));
    }, []);

    useEffect(() => {
        FeedApi.getAllFeeds()
            .then((data: IntefracesForFeed[]) => {
                dispatch(SET_FEEDS(data));
                setLoad(false);
            })
            .catch((e) => console.log(e.message))
            .finally(() => setLoad(false));
    }, [load]);

    const addFeedModalShow = () => setShowAddFeed(true);
    const editFeedModalShow = () => setShowEditFeed(true);
    const deleteModalShow = () => setShowDeleteFeed(true);
    const sortModalShow = () => setShowSortFeed(true);

    return (
        <Container>
            <Row className="mt-2" xs="auto">
                <Col>
                    <Button variant="primary" onClick={addFeedModalShow}>
                        Добавить
                    </Button>
                </Col>
                <Col>
                    <Button variant="primary" onClick={editFeedModalShow}>
                        Редактировать
                    </Button>
                </Col>
                <Col>
                    <Button variant="primary" onClick={deleteModalShow}>
                        Удалить
                    </Button>
                </Col>
                <Col>
                    <Button variant="primary" onClick={sortModalShow}>
                        Фильтр
                    </Button>
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
            <AddNewFeed show={showAddFeed} setShow={setShowAddFeed} setLoad={setLoad} />
            <EditFeed show={showEditFeed} setShow={setShowEditFeed} setLoad={setLoad} />
            <DeleteFeed show={showDeleteFeed} setShow={setShowDeleteFeed} setLoad={setLoad} />
            <SortFeeds show={showSortFeed} setShow={setShowSortFeed} setLoad={setLoad} />
        </Container>
    );
};

export default FeedTable;
