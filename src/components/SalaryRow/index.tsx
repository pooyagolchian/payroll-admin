import React, { useState } from 'react';
import { TableCell, TableRow, TextField, Checkbox } from '@mui/material';

type SalaryRowProps = {
  employee: {
    id?: string;
    name?: string;
    basicSalary?: number;
    salaryAllowances?: number;
  };
};

function SalaryRow({ employee }: SalaryRowProps) {
  const [additions, setAdditions] = useState(0);
  const [deductions, setDeductions] = useState(0);
  const [isGratuity, setIsGratuity] = useState(false);

  const handleAdditionsChange = (value: string) => {
    setAdditions(parseFloat(value));
  };

  const handleDeductionsChange = (value: string) => {
    setDeductions(parseFloat(value));
  };

  const handleGratuityChange = (checked: boolean) => {
    setIsGratuity(checked);
  };

  const totalSalary =
    Number(employee?.basicSalary) +
    Number(employee?.salaryAllowances) +
    Number(additions) -
    Number(deductions);

  return (
    <TableRow key={employee.id}>
      <TableCell>{employee.name}</TableCell>
      <TableCell>{employee.basicSalary}</TableCell>
      <TableCell>{employee.salaryAllowances}</TableCell>
      <TableCell>
        <TextField
          type="number"
          value={additions}
          onChange={(e) => handleAdditionsChange(e.target.value)}
        />
      </TableCell>
      <TableCell>
        <TextField
          type="number"
          value={deductions}
          onChange={(e) => handleDeductionsChange(e.target.value)}
        />
      </TableCell>
      <TableCell>{totalSalary || 0}</TableCell>
      <TableCell>
        <Checkbox
          checked={isGratuity}
          onChange={(e) => handleGratuityChange(e.target.checked)}
        />
      </TableCell>
    </TableRow>
  );
}

export default SalaryRow;
