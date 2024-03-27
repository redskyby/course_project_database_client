import { combineReducers, configureStore } from "@reduxjs/toolkit";
import animals from "./slice/AnimalSlice";
import feeds from "./slice/FeedSlice";
import positions from "./slice/PositionSlice";
import vaccinations from "./slice/VaccinationSlice";
import illnesses from "./slice/IllnessesSlice";
import zoos from "./slice/ZoosSlice";
import workWithAnimals from "./slice/WorkWithAnimalSlice";
import employees from "./slice/EmployeesSlice";

const rootReducer = combineReducers({
    AnimalToolKit: animals,
    FeedToolKit: feeds,
    PositionToolKit: positions,
    VaccinationToolKit: vaccinations,
    IllnessesToolKit: illnesses,
    ZoosToolKit: zoos,
    WorkWithAnimalsToolKit: workWithAnimals,
    EmployeesToolKit: employees,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
