import { combineReducers, configureStore } from "@reduxjs/toolkit";
import animals from "./slice/AnimalSlice";

const rootReducer = combineReducers({
    AnimalToolKit: animals,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
