import { DataGrid } from '@mui/x-data-grid';
import '../App.css'

const DataTable = () => {
    
    const rows = [
        { id: 1, col1: 'Employee1', col2: 'Y', col3: 'Y', col4: 'Y', col5: 'Y', col6: 'Y' },
        { id: 2, col1: 'Employee2', col2: 'Y', col3: 'Y', col4: 'Y', col5: 'Y', col6: 'Y' },
        { id: 3, col1: 'Employee3', col2: 'Y', col3: 'Y', col4: 'Y', col5: 'Y', col6: 'Y' },
        { id: 4, col1: 'Employee4', col2: 'Y', col3: 'Y', col4: 'Y', col5: 'Y', col6: 'Y' },
        { id: 5, col1: 'Employee5', col2: 'Y', col3: 'Y', col4: 'Y', col5: 'Y', col6: 'Y' },
        { id: 6, col1: 'Employee6', col2: 'Y', col3: 'Y', col4: 'Y', col5: 'Y', col6: 'Y' },
      ];
      
      const columns = [
        { field: 'col1', headerName: 'Staff Members', width: 200 },
        { field: 'col2', headerName: 'Monday', width: 180 },
        { field: 'col3', headerName: 'Tuesday', width: 180 },
        { field: 'col4', headerName: 'Wednesday', width: 180 },
        { field: 'col5', headerName: 'Thursday', width: 180 },
        { field: 'col6', headerName: 'Friday', width: 180 },
        { field: 'col7', headerName: 'Total', width: 180 },
      ];
      
    
    return(
        <div className='datagrid' style={{ height: 400 }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
    )
}

export default DataTable;