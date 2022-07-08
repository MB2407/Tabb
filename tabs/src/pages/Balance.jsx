import React from 'react';
import './Balance.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(type, allowance, availed, remaining) {
  return { type, allowance, availed, remaining};
}

const rows = [
  createData('Paid leave', 15, 5, 10),
  createData('Sick leave', 15, 9, 6),
  createData('Maternity leave', 30, 0, 30),
  createData('Carry over from previous year', 3, 2, 1),
];

function Balance() {
  return (
    <div className='balance'>
      <h1>Balance Leaves</h1>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" >
        <TableHead>
          <TableRow >
            <TableCell>Type</TableCell>
            <TableCell align="right">Allowance</TableCell>
            <TableCell align="right">Availed</TableCell>
            <TableCell align="right">Remaining</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.type}
              </TableCell>
              <TableCell align="right">{row.allowance}</TableCell>
              <TableCell align="right">{row.availed}</TableCell>
              <TableCell align="right">{row.remaining}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
  );
}

export default Balance;
