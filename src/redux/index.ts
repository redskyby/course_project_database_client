import { combineReducers, configureStore } from "@reduxjs/toolkit";
import animals from "./slice/AnimalSlice";
import feeds from "./slice/FeedSlice";
import positions from "./slice/PositionSlice";
import vaccinations from "./slice/VaccinationSlice";
import illnesses from "./slice/IllnessesSlice";

const rootReducer = combineReducers({
    AnimalToolKit: animals,
    FeedToolKit: feeds,
    PositionToolKit: positions,
    VaccinationToolKit: vaccinations,
    IllnessesToolKit: illnesses,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
