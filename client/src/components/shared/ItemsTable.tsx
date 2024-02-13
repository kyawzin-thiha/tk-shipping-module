import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'Item', width: 300 },
  { field: 'firstName', headerName: 'Description', width: 400 },
  { field: 'lastName', headerName: 'SO#', width: 130 },
  { field: 'age', headerName: 'Qty', width: 130 },
  {
    field: 'fullName',
    headerName: 'Ship Address',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 250,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  { field: 'shipBy', headerName: 'Ship By', width: 120 }
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, shipBy: '2024-02-15' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, shipBy: '2024-02-20' },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, shipBy: '2024-02-18' },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, shipBy: '2024-02-17' },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, shipBy: '2024-02-16' },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150, shipBy: '2024-02-19' },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, shipBy: '2024-02-21' },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, shipBy: '2024-02-22' },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, shipBy: '2024-02-23' },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        autoHeight
        disableSelectionOnClick
        pageSize={5}
        rowsPerPageOptions={[5, 10]}
      />
    </div>
  );
}
