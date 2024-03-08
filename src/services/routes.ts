import AnimalTable from "../pages/AnimalTable";
import {ANIMALS_ROUTE} from "./const";


export const publicRoutes: { path: string; Component: React.FC }[] = [
    {
        path: ANIMALS_ROUTE,
        Component: AnimalTable,
    },
];
