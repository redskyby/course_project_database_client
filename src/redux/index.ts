import { combineReducers, configureStore } from "@reduxjs/toolkit";
import animals from "./slice/AnimalSlice";
import feeds from "./slice/FeedSlice";

const rootReducer = combineReducers({
    AnimalToolKit: animals,
    FeedToolKit: feeds,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
