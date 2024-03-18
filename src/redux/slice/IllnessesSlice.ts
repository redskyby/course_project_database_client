import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InterfacesForIllnesses } from "../../services/interfaces/interfacesForIllnesses";

const initialState = {
    illnesses: [] as InterfacesForIllnesses[],
};

const IllnessesSlice = createSlice({
    name: "vaccinations",
    initialState,
    reducers: {
        SET_ILLNESSES: (state, action: PayloadAction<InterfacesForIllnesses[]>) => {
            state.illnesses = [...action.payload];
        },
    },
});

export default IllnessesSlice.reducer;

export const { SET_ILLNESSES } = IllnessesSlice.actions;
