import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InterfaceForZoos } from "../../services/interfaces/interfaceForZoos";

const initialState = {
    zoos: [] as InterfaceForZoos[],
};

const ZoosSlice = createSlice({
    name: "zoos",
    initialState,
    reducers: {
        SET_ZOOS: (state, action: PayloadAction<InterfaceForZoos[]>) => {
            state.zoos = [...action.payload];
        },
    },
});

export default ZoosSlice.reducer;

export const { SET_ZOOS } = ZoosSlice.actions;
