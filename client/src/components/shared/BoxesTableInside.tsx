import React, { useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CreateItem from "../modals/CreateItem";

const columns: GridColDef[] = [
  { field: 'id', headerName: 'Item', width: 350 },
  { field: 'description', headerName: 'Description', width: 420 },
  { field: 'txn_number', headerName: 'SO#', width: 110 },
  { field: 'totalBox', headerName: 'Total Box Qty', width: 200 },
  { field: 'qty', headerName: 'Qty', width: 110 },

];

const rows = [
  { id: 'Sample item 1', txn_number: 1234, shipAddress: '198 North Sea Ave, Burnaby', qty: 35, shipBy: '2024-02-15' },
  { id: 'Sample item 2', txn_number: 2354, shipAddress: '2400 Boundary Road, Burnaby', qty: 42, shipBy: '2024-02-20' },
  { id: 'Sample item 3', txn_number: 3457, shipAddress: '20216 98th Ave, Langley', qty: 45, shipBy: '2024-02-18' },
  { id: 'Sample item 4', txn_number: 6786, shipAddress: '4230 Yew Street, Vancouver', qty: 16, shipBy: '2024-02-17' },
  { id: 'Sample item 5', txn_number: 3263, shipAddress: '12-4970 Polkey Road, Duncan', qty: 1, shipBy: '2024-02-16' },
  { id: 'Sample item 6', txn_number: 8642, shipAddress: '450 Denman Street, Vancouver', qty: 150, shipBy: '2024-02-19' },
  { id: 'Sample item 7', txn_number: 1342, shipAddress: '96 North Bend Street, Coquitlam', qty: 44, shipBy: '2024-02-21' },
  { id: 'Sample item 8', txn_number: 6795, shipAddress: '320 Seymour Blvd, North Vancouver', qty: 36, shipBy: '2024-02-22' },
  { id: 'Sample item 9', txn_number: 3781, shipAddress: '110 - 6191 Westminster Hwy, Richmond', qty: 65, shipBy: '2024-02-23' },
  { id: 'Sample item 10', txn_number: 1234, shipAddress: '198 North Sea Ave, Burnaby', qty: 35, shipBy: '2024-02-15' },
  { id: 'Sample item 11', txn_number: 2354, shipAddress: '2400 Boundary Road, Burnaby', qty: 42, shipBy: '2024-02-20' },
  { id: 'Sample item 13', txn_number: 3457, shipAddress: '20216 98th Ave, Langley', qty: 45, shipBy: '2024-02-18' },
  { id: 'Sample item 14', txn_number: 6786, shipAddress: '4230 Yew Street, Vancouver', qty: 16, shipBy: '2024-02-17' },
  { id: 'Sample item 15', txn_number: 3263, shipAddress: '12-4970 Polkey Road, Duncan', qty: 1, shipBy: '2024-02-16' },
  { id: 'Sample item 16', txn_number: 8642, shipAddress: '450 Denman Street, Vancouver', qty: 150, shipBy: '2024-02-19' },
  { id: 'Sample item 17', txn_number: 1342, shipAddress: '96 North Bend Street, Coquitlam', qty: 44, shipBy: '2024-02-21' },
  { id: 'Sample item 18', txn_number: 6795, shipAddress: '320 Seymour Blvd, North Vancouver', qty: 36, shipBy: '2024-02-22' },
  { id: 'Sample item 19', txn_number: 3781, shipAddress: '110 - 6191 Westminster Hwy, Richmond', qty: 65, shipBy: '2024-02-23' },
];

export default function BoxesTableInside() {
  const [searchText, setSearchText] = useState('');
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleSearchTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const toggleDialog = () => {
    setDialogOpen(!isDialogOpen);
  };

  const filteredRows = rows.filter(row =>
    Object.values(row).some(value =>
      value?.toString().toLowerCase().includes(searchText.toLowerCase())
    )
  );

  return (
    <div className="container">
      
      <div className="search-container">
        <Button className="plus-button" onClick={toggleDialog}>
          <img src="/assets/icons/plus-minus-solid.svg" alt="add" className="button-icon" />
          ITEM
        </Button>
        {isDialogOpen && <CreateItem onClose={toggleDialog} />}
      </div>
      <div className="data-grid-container">
        <DataGrid
          rows={filteredRows}
          columns={columns}
          autoHeight
          disableRowSelectionOnClick
          initialState={{
            pagination: {
                paginationModel: { page: 0, pageSize: 5 },
            },
            }}
            pageSizeOptions={[5, 10, 50]}
        />
      </div>
    </div>
  );
}