import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InterfaceForPosition } from "../../services/interfaces/interfaceForPosition";

const initialState = {
    positions: [] as InterfaceForPosition[],
};

const PositionSlice = createSlice({
    name: "positions",
    initialState,
    reducers: {
        SET_POSITIONS: (state, action: PayloadAction<InterfaceForPosition[]>) => {
            state.positions = [...action.payload];
        },
    },
});

export default PositionSlice.reducer;

export const { SET_POSITIONS } = PositionSlice.actions;
