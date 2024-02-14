import React, { useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'Box #', width: 200 },
  { field: 'contents', headerName: 'Contents', width: 400 },
  { field: 'txn_number', headerName: 'SO#', width: 110 },
  { field: 'shipMethod', headerName: 'Ship Method', width: 130 },
  {
    field: 'shipAddress',
    headerName: 'Ship Address',
    sortable: false,
    width: 250,
  },
  { field: 'shipBy', headerName: 'Ship By', width: 120 }
];

const rows = [
  { id: 'Sample item 1', txn_number: 1234, shipAddress: '198 North Sea Ave, Burnaby', shipMethod: 'Call for Pickup', shipBy: '2024-02-15' },
  { id: 'Sample item 2', txn_number: 2354, shipAddress: '2400 Boundary Road, Burnaby', shipMethod: 'Call for Pickup', shipBy: '2024-02-20' },
  { id: 'Sample item 3', txn_number: 3457, shipAddress: '20216 98th Ave, Langley', shipMethod: 'TK Van', shipBy: '2024-02-18' },
  { id: 'Sample item 4', txn_number: 6786, shipAddress: '4230 Yew Street, Vancouver', shipMethod: 'Courier', shipBy: '2024-02-17' },
  { id: 'Sample item 5', txn_number: 3263, shipAddress: '12-4970 Polkey Road, Duncan', shipMethod: 'Courier', shipBy: '2024-02-16' },
  { id: 'Sample item 6', txn_number: 8642, shipAddress: '450 Denman Street, Vancouver', shipMethod: 'Courier', shipBy: '2024-02-19' },
  { id: 'Sample item 7', txn_number: 1342, shipAddress: '96 North Bend Street, Coquitlam', shipMethod: 'TK Van', shipBy: '2024-02-21' },
  { id: 'Sample item 8', txn_number: 6795, shipAddress: '320 Seymour Blvd, North Vancouver', shipMethod: 'Courier', shipBy: '2024-02-22' },
  { id: 'Sample item 9', txn_number: 3781, shipAddress: '110 - 6191 Westminster Hwy, Richmond', shipMethod: 'Courier', shipBy: '2024-02-23' },
  { id: 'Sample item 10', txn_number: 1234, shipAddress: '198 North Sea Ave, Burnaby', shipMethod: 'Courier', shipBy: '2024-02-15' },
  { id: 'Sample item 11', txn_number: 2354, shipAddress: '2400 Boundary Road, Burnaby', shipMethod: 'Call for Pickup', shipBy: '2024-02-20' },
  { id: 'Sample item 13', txn_number: 3457, shipAddress: '20216 98th Ave, Langley', shipMethod: 'Courier', shipBy: '2024-02-18' },
  { id: 'Sample item 14', txn_number: 6786, shipAddress: '4230 Yew Street, Vancouver', shipMethod: 'TK Van', shipBy: '2024-02-17' },
  { id: 'Sample item 15', txn_number: 3263, shipAddress: '12-4970 Polkey Road, Duncan', shipMethod: 'Courier', shipBy: '2024-02-16' },
  { id: 'Sample item 16', txn_number: 8642, shipAddress: '450 Denman Street, Vancouver', shipMethod: 'Courier', shipBy: '2024-02-19' },
  { id: 'Sample item 17', txn_number: 1342, shipAddress: '96 North Bend Street, Coquitlam', shipMethod: 'Call for Pickup', shipBy: '2024-02-21' },
  { id: 'Sample item 18', txn_number: 6795, shipAddress: '320 Seymour Blvd, North Vancouver', shipMethod: 'TK Van', shipBy: '2024-02-22' },
  { id: 'Sample item 19', txn_number: 3781, shipAddress: '110 - 6191 Westminster Hwy, Richmond', shipMethod: 'Courier', shipBy: '2024-02-23' },
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
      <div className="header-container">
        <h2 className="h2-semibold">Boxes</h2>
      </div>
      <div className="search-container">
        <TextField
          label="Search"
          variant="outlined"
          value={searchText}
          onChange={handleSearchTextChange}
          className="search-field"
        />
        <Button className="plus-button">
          <img src="/assets/icons/plus-solid-white.svg" alt="add" className="plus-icon" />
          BOX
        </Button>
      </div>
      <div className="data-grid-container">
        <DataGrid
          rows={filteredRows}
          columns={columns}
          autoHeight
          disableRowSelectionOnClick
          //rowsPerPageOptions={[10, 20, 30]}
        />
      </div>
    </div>
  );
  
}
