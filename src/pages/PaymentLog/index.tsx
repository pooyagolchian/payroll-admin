import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

import { useSelector } from 'react-redux';
import { RootState } from '../../store/store.ts';

export type FormValues = {
  id: number;
  staffId: string;
  name: string;
  joiningDate: string;
  basicSalary: number;
  salaryAllowances: number;
  paymentDate?: string;
};

const PaymentLog = () => {
  const employeesPaymentLog = useSelector(
    (state: RootState) => state.employees.removedEmployeesLog
  );

  return (
    <div className="my-10">
      <TableContainer className="my-10" component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Staff ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Joining Date</TableCell>
              <TableCell>Basic Salary</TableCell>
              <TableCell>Salary Allowances</TableCell>
              <TableCell>Payment Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employeesPaymentLog.map((employee, index) => (
              <TableRow key={index}>
                <TableCell>{employee.staffId}</TableCell>
                <TableCell>{employee.name}</TableCell>
                <TableCell>{employee.joiningDate}</TableCell>
                <TableCell>{employee.basicSalary}</TableCell>
                <TableCell>{employee.salaryAllowances}</TableCell>
                <TableCell>{employee.paymentDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default PaymentLog;
