import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from '@mui/material';

const StackTable = ({ stack }) => {
  return (
    <TableContainer component={Paper} style={{ marginTop: '10px', marginBottom: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Index</TableCell>
            <TableCell>數字</TableCell>
            <TableCell>
              <Box
                component="span"
                sx={{
                  display: 'inline-block',
                  width: 20,
                  height: 20,
                  marginRight: 1,
                  backgroundColor: 'green',
                  clipPath: 'circle(50%)',
                }}
              />
            </TableCell>
            <TableCell>
              <Box
                component="span"
                sx={{
                  display: 'inline-block',
                  width: 20,
                  height: 20,
                  marginRight: 1,
                  backgroundColor: 'orange',
                  clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                }}
              />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stack.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{item.input}</TableCell>
              <TableCell>{item.correct}</TableCell>
              <TableCell>{item.misplaced}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StackTable;
