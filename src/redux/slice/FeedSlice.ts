import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IntefracesForFeed } from "../../services/intefracesForFeed";

const initialState = {
    feeds: [] as IntefracesForFeed[],
};

const FeedSlice = createSlice({
    name: "feeds",
    initialState,
    reducers: {
        SET_FEEDS: (state, action: PayloadAction<IntefracesForFeed[]>) => {
            state.feeds = [...action.payload];
        },
    },
});

export default FeedSlice.reducer;
export const { SET_FEEDS } = FeedSlice.actions;
