import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AnimalInterface } from "../../services/interfacesForAnimals";

const initialState = {
    animals: [] as AnimalInterface[],
};

const AnimalSlice = createSlice({
    name: "animals",
    initialState,
    reducers: {
        SET_ANIMALS: (state, action: PayloadAction<AnimalInterface[]>) => {
            state.animals = [...action.payload];
        },
    },
});

export default AnimalSlice.reducer;
export const { SET_ANIMALS } = AnimalSlice.actions;
