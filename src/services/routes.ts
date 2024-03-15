import AnimalTable from "../pages/AnimalTable";
import { ANIMALS_ROUTE, FEEDS_ROUTE, POSITION_ROUTE } from "./const";
import FeedTable from "../pages/FeedTable";
import PositionTable from "../pages/PositionTable";

export const publicRoutes: { path: string; Component: React.FC }[] = [
    {
        path: ANIMALS_ROUTE,
        Component: AnimalTable,
    },
    {
        path: FEEDS_ROUTE,
        Component: FeedTable,
    },
    {
        path: POSITION_ROUTE,
        Component: PositionTable,
    },
];
