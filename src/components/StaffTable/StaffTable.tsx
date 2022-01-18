import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';

import './staffTable.scss'

import TablePaginationActions from '../DriverTable/TablePaginationActions';

import { AppState } from '../../types/AppState'

import {fetchAllTechnicalStaff} from '../../redux/actions/TechnicalStaffAction'

const StaffTable = () => {

    //get all drivers from redux state
    const technicalStaffs = useSelector((state: AppState) => state.technicalStaffReducer.technicalStaffs)
    const isLoading = useSelector((state: AppState) => state.technicalStaffReducer.isLoading)
    const isErrorOccured = useSelector((state: AppState) => state.technicalStaffReducer.isErrorOccured)
    const error = useSelector((state: AppState) => state.technicalStaffReducer.error)

    const countires = useSelector((state: AppState) => state.countryReducer.countries)
    //initialize dispatch
    const dispatch = useDispatch()

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

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

    React.useEffect(() => {
        dispatch(fetchAllTechnicalStaff());
      }, [dispatch]);


      const handleCountyConversion = (countryId: number) => {

        if (countryId == undefined)
          return "Not supplied";
    
        const findedCountry = countires.find(x => x.id == countryId);
        if (findedCountry != null)
          return findedCountry.name;
    
        return "Not supplied";
      };
    
      const handlingAgeCaclucalte = (birthday: Date) => {
        let date1 = new Date(birthday);
        let date2 = new Date();
        let yearsDiff = date2.getFullYear() - date1.getFullYear();
        return yearsDiff;
      }

    return (
            <div className='staffTable'>

            <TableContainer component={Paper} color='green'>
            <Table className='table' sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
                <TableHead>
                <TableRow className='header-color'>
                    <TableCell align="center" className='header-font'>Forename</TableCell>
                    <TableCell align="center" className='header-font'>Surname</TableCell>
                    <TableCell align="center" className='header-font'>Ages</TableCell>
                    <TableCell align="center" className='header-font'>Title</TableCell>
                    <TableCell align="center" className='header-font'>EducationDetails</TableCell>
                    <TableCell align="center" className='header-font'>Country</TableCell>
                </TableRow>
                </TableHead>
                <TableBody >
                {isLoading && <h2>Loading...</h2>}
                {isLoading && isErrorOccured && <h2>{error}</h2>}
                {!isLoading && (rowsPerPage > 0 ? technicalStaffs.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) :
                    technicalStaffs).map((row) => (
                    <TableRow
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row" align='center' className='body-font'>
                        {row.forename}
                        </TableCell>
                        <TableCell align="center" className='body-font'>{row.surname}</TableCell>
                        <TableCell align="center" className='body-font'>{handlingAgeCaclucalte(row.dateOfBirth)}</TableCell>
                        <TableCell align="center" className='body-font'>{row.title}</TableCell>
                        <TableCell align="center" className='body-font'>{row.educationDetails}</TableCell>
                        <TableCell align="center" className='body-font'>{handleCountyConversion(row.countryId)}</TableCell>
                      
                    </TableRow>
                    ))}

                </TableBody>
                <TableFooter className='header-color'>
                <TableRow className='header-color'>
                    <TablePagination
                    className='menuItem'
                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                    colSpan={3}
                    count={technicalStaffs.length}
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
export default StaffTable;
