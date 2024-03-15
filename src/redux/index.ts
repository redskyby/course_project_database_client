import { combineReducers, configureStore } from "@reduxjs/toolkit";
import animals from "./slice/AnimalSlice";
import feeds from "./slice/FeedSlice";
import positions from "./slice/PositionSlice";

const rootReducer = combineReducers({
    AnimalToolKit: animals,
    FeedToolKit: feeds,
    PositionToolKit: positions,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
