import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store.ts';
import { addEmployee } from '../../store/employeesSlice.ts';

export type FormValues = {
  id: number;
  staffId: string;
  name: string;
  joiningDate: string;
  basicSalary: number;
  salaryAllowances: number;
};

const Employees = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    dispatch(addEmployee(data));
    handleClose();
  };
  const employees = useSelector(
    (state: RootState) => state.employees.employees
  );

  return (
    <div className="my-10">
      <Button className="my-10" variant="outlined" onClick={handleClickOpen}>
        Add Employee
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Employee</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              margin="normal"
              fullWidth
              label="Staff ID"
              {...register('staffId', { required: 'Staff ID is required' })}
              error={!!errors.staffId}
              helperText={errors.staffId?.message}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Name"
              {...register('name', { required: 'Name is required' })}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Joining Date"
              type="date"
              {...register('joiningDate', {
                required: 'Joining Date is required',
              })}
              error={!!errors.joiningDate}
              helperText={errors.joiningDate?.message}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Basic Salary"
              type="number"
              {...register('basicSalary', {
                required: 'Basic Salary is required',
              })}
              error={!!errors.basicSalary}
              helperText={errors.basicSalary?.message}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Salary Allowances"
              type="number"
              {...register('salaryAllowances', {
                required: 'Salary Allowances is required',
              })}
              error={!!errors.salaryAllowances}
              helperText={errors.salaryAllowances?.message}
            />
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit">Submit</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
      <TableContainer className="my-10" component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Staff ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Joining Date</TableCell>
              <TableCell>Basic Salary</TableCell>
              <TableCell>Salary Allowances</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((employee, index) => (
              <TableRow key={index}>
                <TableCell>{employee.staffId}</TableCell>
                <TableCell>{employee.name}</TableCell>
                <TableCell>{employee.joiningDate}</TableCell>
                <TableCell>{employee.basicSalary}</TableCell>
                <TableCell>{employee.salaryAllowances}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Employees;
