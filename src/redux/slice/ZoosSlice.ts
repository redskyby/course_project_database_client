import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { interfaceForZoos } from "../../services/interfaces/interfaceForZoos";

const initialState = {
    zoos: [] as interfaceForZoos[],
};

const ZoosSlice = createSlice({
    name: "zoos",
    initialState,
    reducers: {
        SET_ZOOS: (state, action: PayloadAction<interfaceForZoos[]>) => {
            state.zoos = [...action.payload];
        },
    },
});

export default ZoosSlice.reducer;

export const { SET_ZOOS } = ZoosSlice.actions;
