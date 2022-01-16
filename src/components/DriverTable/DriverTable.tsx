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
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import FlagIcon from '@mui/icons-material/Flag';
import GroupRemoveIcon from '@mui/icons-material/GroupRemove';
import Tooltip from '@mui/material/Tooltip';

import TablePaginationActions from './TablePaginationActions';
import { fetchAllDrivers } from '../../redux/actions/DriverAction'
import { removeDriver } from '../../redux/actions/DriverAction'
import { AppState } from '../../types/AppState'
import CreateDriver from '../Driver/CreateDriver';

import './driverTable.scss'


const DriverTable = () => {
  //get all drivers from redux state
  const drivers = useSelector((state: AppState) => state.driverReducer.drivers)
  const isLoadingDriver = useSelector((state: AppState) => state.driverReducer.isLoading)
  const error = useSelector((state: AppState) => state.driverReducer.error)

  const countires = useSelector((state: AppState) => state.countryReducer.countries)
  const isLoadingCountries = useSelector((state: AppState) => state.countryReducer.isLoading)

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //initialize dispatch
  const dispatch = useDispatch()


  React.useEffect(() => {
    dispatch(fetchAllDrivers());
  }, [dispatch]);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - drivers.length) : 0;

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


  const handleRemoveDriver = (driverId:number) => 
  {
      dispatch(removeDriver(driverId))
  };

  const handleCountyConversion = (countryId: number) => {

    if (countryId == undefined)
      return "Not supplied";

    const findedCountry = countires.find(x => x.id == countryId);
    if (findedCountry != null)
      return findedCountry.name;

    return "Not supplied";
  };

  const handleActiveStatus = (isRetired: boolean) => {
    if (isRetired)
      return "Retired";
    return "Active";
  }

  const handlingAgeCaclucalte = (birthday: Date) => {
    let date1 = new Date(birthday);
    let date2 = new Date();
    let yearsDiff = date2.getFullYear() - date1.getFullYear();
    return yearsDiff;
  }

  return (

    <div className='driverTable'>

      <TableContainer component={Paper} color='green'>
        <Table className='table' sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
          <TableHead>
            <TableRow className='header-color'>
              <TableCell align="center" className='header-font'>Driver No.</TableCell>
              <TableCell align="center" className='header-font'>Code</TableCell>
              <TableCell align="center" className='header-font'>Forename</TableCell>
              <TableCell align="center" className='header-font'>Surename</TableCell>
              <TableCell align="center" className='header-font'>Ages</TableCell>
              <TableCell align="center" className='header-font'>Is Retired</TableCell>
              <TableCell align="center" className='header-font'>Country</TableCell>
              <TableCell align="center" className='header-font'>Activity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody >
            {isLoadingDriver && <h2>Loading...</h2>}
            {!isLoadingDriver && (rowsPerPage > 0 ? drivers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) :
              drivers).map((row) => (
                <TableRow
                  key={row.number}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align='center' className='body-font'>
                    {row.number}
                  </TableCell>
                  <TableCell component="th" scope="row" align='center' className='body-font'>
                    {row.code}
                  </TableCell>
                  <TableCell component="th" scope="row" align='center' className='body-font'>
                    {row.forename}
                  </TableCell>
                  <TableCell align="center" className='body-font'>{row.surname}</TableCell>
                  <TableCell align="center" className='body-font'>{handlingAgeCaclucalte(row.dateOfBirth)}</TableCell>
                  <TableCell align="center" className='body-font'>{handleActiveStatus(row.isRetired)}</TableCell>
                  <TableCell align="center" className='body-font'>{handleCountyConversion(row.countryId)}</TableCell>
                  <TableCell align="center" className='body-font'>
                    <Tooltip title="Change bio information" style={{fontSize:'12'}}>
                      <Button style={{fontSize:8,background:'gray',color:'blue'}}>
                          <EditIcon fontSize='large'/>
                      </Button>
                    </Tooltip>
                    <Tooltip title="Change citizenship">
                      <Button style={{fontSize:8,background:'gray',color:'yellow',marginLeft:10}}>
                          <FlagIcon fontSize='large'/>
                      </Button>
                    </Tooltip>
                    <Tooltip title="Remove from active drivers">
                    <Button style={{fontSize:8,background:'red',color:'gray',marginLeft:10}} onClick={()=>handleRemoveDriver(row.id)}>
                          <GroupRemoveIcon fontSize='large'/>
                      </Button>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}

          </TableBody>
          <TableFooter className='header-color'>
            <TableRow className='header-color'>
              <TablePagination
                className='menuItem'
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={3}
                count={drivers.length}
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
      <CreateDriver />

    </div>
  )
}

export default DriverTable;