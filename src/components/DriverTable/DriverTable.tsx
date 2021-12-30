import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import TablePaginationActions from './TablePaginationActions'

import { makeStyles } from '@material-ui/core/styles';

import './driverTable.scss'


function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
  ) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('KitKat', 518, 26.0,49, 3.9),
  createData('Lollipop', 392, 0.2,49, 3.9),
  createData('Marshmallow', 318, 0,49, 3.9),
  createData('Nougat', 360, 19.0,49, 3.9),
  createData('Oreo', 437, 18.0,49, 3.9),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('KitKat', 518, 26.0,49, 3.9),
createData('Lollipop', 392, 0.2,49, 3.9),
createData('Marshmallow', 318, 0,49, 3.9),
createData('Nougat', 360, 19.0,49, 3.9),
createData('Oreo', 437, 18.0,49, 3.9),
  ];

const  DriverTable=()=>{
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
      page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  
    const handleChangePage = (
      event: React.MouseEvent<HTMLButtonElement> | null,
      newPage: number,
    ) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  


    return(
        <div className='driverTable'> 
        <TableContainer component={Paper} color='green'>
            <Table className='table' sx={{ minWidth: 650 }} size="medium"   aria-label="a dense table">
            <TableHead>
                <TableRow className='header-color'>
                <TableCell align="center" className='header-font'>Dessert (100g serving)</TableCell>
                <TableCell align="right" className='header-font'>Calories</TableCell>
                <TableCell align="right" className='header-font'>Fat&nbsp;(g)</TableCell>
                <TableCell align="right" className='header-font'>Carbs&nbsp;(g)</TableCell>
                <TableCell align="right" className='header-font'>Protein&nbsp;(g)</TableCell>
                </TableRow>
            </TableHead>
            <TableBody >
                {(rowsPerPage > 0
                    ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    : rows
                ).map((row) => (
                <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row" align='center' className='body-font'>
                    {row.name}
                    </TableCell>
                    <TableCell align="right" className='body-font'>{row.calories}</TableCell>
                    <TableCell align="right" className='body-font'>{row.fat}</TableCell>
                    <TableCell align="right" className='body-font'>{row.carbs}</TableCell>
                    <TableCell align="right" className='body-font'>{row.protein}</TableCell>
                </TableRow>
                ))}
            </TableBody>
            <TableFooter className='header-color'>
                    <TableRow className='header-color'>
                        <TablePagination
                        className='menuItem'
                        rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                        colSpan={3}
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        SelectProps={{
                            inputProps: {
                            'aria-label': 'rows per page',
                            },
                            native: true,
                        }}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        ActionsComponent={TablePaginationActions}
                        />
                </TableRow>
            </TableFooter>
            </Table>
        </TableContainer>
        </div>
    )
}

export default DriverTable;