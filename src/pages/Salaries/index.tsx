import { useSelector } from 'react-redux';
import {
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
} from '@mui/material';
import { RootState } from '../../store/store';
import SalaryRow from './../../components/SalaryRow';

function Salaries() {
  const selectEmployees = (state: RootState) => state.employees.employees;
  const employees = useSelector(selectEmployees);

  return (
    <div className="py-10">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Basic Salary</TableCell>
            <TableCell>Allowances</TableCell>
            <TableCell>Additions</TableCell>
            <TableCell>Deductions</TableCell>
            <TableCell>Total</TableCell>
            <TableCell>Gratuity</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee) => (
            <SalaryRow key={employee?.id} employee={employee} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Salaries;
