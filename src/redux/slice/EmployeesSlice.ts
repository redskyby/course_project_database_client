import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InterfaceForEmployees } from "../../services/interfaces/interfaceForEmployees";

const initialState = {
    employees: [] as InterfaceForEmployees[],
};

const EmployeesSlice = createSlice({
    name: "employees",
    initialState,
    reducers: {
        SET_EMPLOYEES: (state, action: PayloadAction<InterfaceForEmployees[]>) => {
            state.employees = [...action.payload];
        },
    },
});

export default EmployeesSlice.reducer;
export const { SET_EMPLOYEES } = EmployeesSlice.actions;
