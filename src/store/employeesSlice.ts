import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormValues } from '../pages/Employees';

type EmployeeState = {
  employees: FormValues[];
};

const initialState: EmployeeState = {
  employees: [],
};

export const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: (state, action: PayloadAction<FormValues>) => {
      state.employees.push(action.payload);
    },
  },
});

export const { addEmployee } = employeesSlice.actions;
export default employeesSlice.reducer;
