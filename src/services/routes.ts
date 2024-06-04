import AnimalTable from "../pages/AnimalTable";
import {
    ANIMALS_ROUTE,
    EMPLOYEES_ROUTE,
    FEEDS_ROUTE,
    ILLNESSES_ROUTE,
    POSITION_ROUTE,
    REPORT_ROUTE,
    VACCINATION_ROUTE,
    WORK_WITH_ANIMALS_ROUTE,
    ZOOS_ROUTE,
} from "./const";
import FeedTable from "../pages/FeedTable";
import PositionTable from "../pages/PositionTable";
import VaccinationTable from "../pages/VaccinationTable";
import IllnessesTable from "../pages/IllnessesTable";
import ZoosTable from "../pages/ZoosTable";
import WorkWithAnimalsTable from "../pages/WorkWithAnimalsTable";
import EmployeesTable from "../pages/EmployeesTable";
import GetReport from "../components/modals/modalReport/GetReport";
import ReportTable from "../pages/ReportTable";

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
    {
        path: WORK_WITH_ANIMALS_ROUTE,
        Component: WorkWithAnimalsTable,
    },
    {
        path: EMPLOYEES_ROUTE,
        Component: EmployeesTable,
    },
    {
        path: REPORT_ROUTE,
        Component:  ReportTable,
    },
];
