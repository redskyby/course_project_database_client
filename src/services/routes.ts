import AnimalTable from "../pages/AnimalTable";
import { ANIMALS_ROUTE, FEEDS_ROUTE } from "./const";
import FeedTable from "../pages/FeedTable";

export const publicRoutes: { path: string; Component: React.FC }[] = [
    {
        path: ANIMALS_ROUTE,
        Component: AnimalTable,
    },
    {
        path: FEEDS_ROUTE,
        Component: FeedTable,
    },
];
