import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InterfaceForFeed } from "../../services/interfaces/interfaceForFeed";

const initialState = {
    feeds: [] as InterfaceForFeed[],
};

const FeedSlice = createSlice({
    name: "feeds",
    initialState,
    reducers: {
        SET_FEEDS: (state, action: PayloadAction<InterfaceForFeed[]>) => {
            state.feeds = [...action.payload];
        },
    },
});

export default FeedSlice.reducer;
export const { SET_FEEDS } = FeedSlice.actions;
