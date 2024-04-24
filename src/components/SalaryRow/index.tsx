import React, { useState } from 'react';
import {
  TableCell,
  TableRow,
  TextField,
  Checkbox,
  Button,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { paySalary } from '../../store/employeesSlice.ts';

type SalaryRowProps = {
  employee: {
    staffId?: string;
    name?: string;
    basicSalary?: number;
    salaryAllowances?: number;
  };
};

function SalaryRow({ employee }: SalaryRowProps) {
  const [additions, setAdditions] = useState<number>(0);
  const [deductions, setDeductions] = useState<number>(0);
  const [isGratuity, setIsGratuity] = useState<boolean>(false);

  const dispatch = useDispatch();

  const handleAdditionsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAdditions(parseFloat(event.target.value));
  };

  const handleDeductionsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDeductions(parseFloat(event.target.value));
  };

  const handleGratuityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsGratuity(event.target.checked);
  };

  const totalSalary =
    Number(employee.basicSalary) +
    Number(employee.salaryAllowances) +
    additions -
    deductions;

  const handlePay = () => {
    if (employee.staffId && isGratuity) {
      dispatch(paySalary(employee?.staffId));
    }
  };

  return (
    <TableRow key={employee.staffId}>
      <TableCell>{employee.name}</TableCell>
      <TableCell>{employee.basicSalary}</TableCell>
      <TableCell>{employee.salaryAllowances}</TableCell>
      <TableCell>
        <TextField
          type="number"
          value={additions}
          onChange={handleAdditionsChange}
        />
      </TableCell>
      <TableCell>
        <TextField
          type="number"
          value={deductions}
          onChange={handleDeductionsChange}
        />
      </TableCell>
      <TableCell>{totalSalary || 0}</TableCell>
      <TableCell>
        <Checkbox checked={isGratuity} onChange={handleGratuityChange} />
      </TableCell>
      <TableCell>
        <Button variant="contained" color="primary" onClick={handlePay}>
          Pay
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default SalaryRow;
