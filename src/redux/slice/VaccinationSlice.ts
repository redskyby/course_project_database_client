import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InterfaceForVaccination } from "../../services/interfaces/interfaceForVaccination";

const initialState = {
    vaccinations: [] as InterfaceForVaccination[],
};

const VaccinationSlice = createSlice({
    name: "vaccinations",
    initialState,
    reducers: {
        SET_VACCINATIONS: (state, action: PayloadAction<InterfaceForVaccination[]>) => {
            state.vaccinations = [...action.payload];
        },
    },
});

export default VaccinationSlice.reducer;

export const { SET_VACCINATIONS } = VaccinationSlice.actions;
