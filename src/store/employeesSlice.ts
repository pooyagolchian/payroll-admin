import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormValues } from '../pages/Employees';

type EmployeeState = {
  employees: FormValues[];
  removedEmployeesLog: FormValues[];
};

const initialState: EmployeeState = {
  employees: [
    {
      id: 1,
      staffId: 'S1001',
      name: 'John Doe',
      joiningDate: '2021-01-15',
      basicSalary: 3000,
      salaryAllowances: 500,
    },
    {
      id: 2,
      staffId: 'S1002',
      name: 'Jane Smith',
      joiningDate: '2020-08-01',
      basicSalary: 3200,
      salaryAllowances: 400,
    },
    {
      id: 3,
      staffId: 'S1003',
      name: 'Alice Johnson',
      joiningDate: '2019-03-23',
      basicSalary: 3500,
      salaryAllowances: 550,
    },
    {
      id: 4,
      staffId: 'S1004',
      name: 'Bob Brown',
      joiningDate: '2022-06-11',
      basicSalary: 2800,
      salaryAllowances: 600,
    },
    {
      id: 5,
      staffId: 'S1005',
      name: 'Carol White',
      joiningDate: '2021-12-05',
      basicSalary: 2900,
      salaryAllowances: 450,
    },
  ],
  removedEmployeesLog: [],
};

export const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: (state, action: PayloadAction<FormValues>) => {
      state.employees.push(action.payload);
    },
    paySalary: (state, action: PayloadAction<string>) => {
      const index = state.employees.findIndex(
        (emp) => emp.staffId === action.payload
      );
      if (index !== -1) {
        const [removedEmployee] = state.employees.splice(index, 1);
        removedEmployee.paymentDate = new Date().toISOString().slice(0, 10);
        state.removedEmployeesLog.push(removedEmployee);
      }
    },
  },
});

export const { addEmployee, paySalary } = employeesSlice.actions;
export default employeesSlice.reducer;
