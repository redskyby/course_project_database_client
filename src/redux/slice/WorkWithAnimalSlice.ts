import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InterfaceForWorkWithAnimals } from "../../services/interfaces/interfaceForWorkWithAnimals";

const initialState = {
    workWithAnimals: [] as InterfaceForWorkWithAnimals[],
};

const WorkWithAnimalSlice = createSlice({
    name: "workWithAnimals",
    initialState,
    reducers: {
        SET_WorkWitAnimals: (state, action: PayloadAction<InterfaceForWorkWithAnimals[]>) => {
            state.workWithAnimals = [...action.payload];
        },
    },
});

export default WorkWithAnimalSlice.reducer;

export const { SET_WorkWitAnimals } = WorkWithAnimalSlice.actions;
