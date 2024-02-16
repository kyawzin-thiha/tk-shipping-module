import React, { useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'Box #', width: 110 },
  { field: 'customer', headerName: 'Customer', width: 220 },
  { field: 'contents', headerName: 'Contents', width: 400 },
  { field: 'txn_number', headerName: 'SO#', width: 110 },
  { field: 'tracking', headerName: 'Tracking #', width: 120 },
  { field: 'shippedDate', headerName: 'Shipped Date', width: 120 }
];

const rows = [
  { id: '12312', customer: 'Lamar', txn_number: '1245', shipMethod: 'Call for Pickup', shippedDate: '2024-02-15' },
  { id: '56323', customer: 'Pattison', txn_number: '2400', shipMethod: 'Call for Pickup', shippedDate: '2024-02-20' },
  { id: '67856', customer: 'City of Surrey', txn_number: '2021', shipMethod: 'TK Van', shippedDate: '2024-02-18' },
  { id: '45321', customer: 'TK House Account', txn_number: '4230', shipMethod: 'Courier', shippedDate: '2024-02-17' },
  { id: '42365', customer: '7-Eleven', txn_number: '4970', shipMethod: 'Courier', shippedDate: '2024-02-16' },
  { id: '87097', customer: 'Bell Telecommunications', txn_number: '4501', shipMethod: 'Courier', shippedDate: '2024-02-19' },
  { id: '23425', customer: 'Lamar', txn_number: '9667', shipMethod: 'TK Van', shippedDate: '2024-02-21' },
  { id: '44245', customer: 'TK House Account', txn_number: '3201', shipMethod: 'Courier', shippedDate: '2024-02-22' },
  { id: '65845', customer: 'TK House Account', txn_number: '6191', shipMethod: 'Courier', shippedDate: '2024-02-23' },
  { id: '75414', customer: 'Pattison', txn_number: '1989', shipMethod: 'Courier', shippedDate: '2024-02-15' },
  { id: '81345', customer: 'TK House Account', txn_number: '2400', shipMethod: 'Call for Pickup', shippedDate: '2024-02-20' },
  { id: '97216', customer: 'TK House Account', txn_number: '2021', shipMethod: 'Courier', shippedDate: '2024-02-18' },
  { id: '02931', customer: 'TK House Account', txn_number: '4230', shipMethod: 'TK Van', shippedDate: '2024-02-17' },
  { id: '26354', customer: 'Lamar', txn_number: '4970', shipMethod: 'Courier', shippedDate: '2024-02-16' },
  { id: '02931', customer: 'Lamar', txn_number: '4509', shipMethod: 'Courier', shippedDate: '2024-02-19' },
  { id: '18413', customer: 'TK House Account', txn_number: '9632', shipMethod: 'Call for Pickup', shippedDate: '2024-02-21' },
  { id: '15428', customer: 'TK House Account', txn_number: '3205', shipMethod: 'TK Van', shippedDate: '2024-02-22' },
  { id: '49809', customer: 'TK House Account', txn_number: '6191', shipMethod: 'Courier', shippedDate: '2024-02-23' },
];

export default function DataTable() {
  const [searchText, setSearchText] = useState('');

  const handleSearchTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const filteredRows = rows.filter(row =>
    Object.values(row).some(value =>
      value?.toString().toLowerCase().includes(searchText.toLowerCase())
    )
  );

  return (
    <div className="container">
      
      <div className="search-container">
        <TextField
          label="Search"
          variant="outlined"
          value={searchText}
          onChange={handleSearchTextChange}
          className="search-field"
        />
      </div>
      <div className="data-grid-container">
        <DataGrid
          rows={filteredRows}
          columns={columns}
          autoHeight
          disableRowSelectionOnClick
          initialState={{
            pagination: {
                paginationModel: { page: 0, pageSize: 10 },
            },
            }}
            pageSizeOptions={[10, 20, 50]}
        />
      </div>
    </div>
  );
  
}
