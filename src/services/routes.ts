import AnimalTable from "../pages/AnimalTable";
import { ANIMALS_ROUTE, FEEDS_ROUTE, ILLNESSES_ROUTE, POSITION_ROUTE, VACCINATION_ROUTE, ZOOS_ROUTE } from "./const";
import FeedTable from "../pages/FeedTable";
import PositionTable from "../pages/PositionTable";
import VaccinationTable from "../pages/VaccinationTable";
import IllnessesTable from "../pages/IllnessesTable";
import ZoosTable from "../pages/ZoosTable";

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
    {
        path: VACCINATION_ROUTE,
        Component: VaccinationTable,
    },
    {
        path: ILLNESSES_ROUTE,
        Component: IllnessesTable,
    },
    {
        path: ZOOS_ROUTE,
        Component: ZoosTable,
    },
];
