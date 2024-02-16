import React, { useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import CreateDelivery from "../modals/CreateDelivery";


const columns: GridColDef[] = [
    { field: 'id', headerName: 'Box #', width: 100 },
    { field: 'contents', headerName: 'Contents', width: 420 },
    { field: 'txn_number', headerName: 'SO#', width: 110 },
    { field: 'width', headerName: 'Width "', width: 100 },
    { field: 'height', headerName: 'Height "', width: 100 },
    { field: 'length', headerName: 'Length "', width: 100 },
    { field: 'weight', headerName: 'Weight (lb)', width: 100 },
    { field: 'insuranceAmount', headerName: 'Insurance ($)', width: 120 },
  ];
  

const rows = [
  { id: '13242', txn_number: 1234, shipAddress: '198 North Sea Ave, Burnaby' },
  { id: '28756', txn_number: 2354, shipAddress: '2400 Boundary Road, Burnaby', qty: 42, shipBy: '2024-02-20' },
  { id: '32341', txn_number: 3457, shipAddress: '20216 98th Ave, Langley', qty: 45, shipBy: '2024-02-18' },
  { id: '49895', txn_number: 6786, shipAddress: '4230 Yew Street, Vancouver', qty: 16, shipBy: '2024-02-17' },
  { id: '50975', txn_number: 3263, shipAddress: '12-4970 Polkey Road, Duncan', qty: 1, shipBy: '2024-02-16' },
  { id: '62343', txn_number: 8642, shipAddress: '450 Denman Street, Vancouver', qty: 150, shipBy: '2024-02-19' },
  { id: '74359', txn_number: 1342, shipAddress: '96 North Bend Street, Coquitlam', qty: 44, shipBy: '2024-02-21' },
  { id: '85426', txn_number: 6795, shipAddress: '320 Seymour Blvd, North Vancouver', qty: 36, shipBy: '2024-02-22' },
  { id: '98795', txn_number: 3781, shipAddress: '110 - 6191 Westminster Hwy, Richmond', qty: 65, shipBy: '2024-02-23' },
  { id: '10324', txn_number: 1234, shipAddress: '198 North Sea Ave, Burnaby', qty: 35, shipBy: '2024-02-15' },
  { id: '11254', txn_number: 2354, shipAddress: '2400 Boundary Road, Burnaby', qty: 42, shipBy: '2024-02-20' },
  { id: '13895', txn_number: 3457, shipAddress: '20216 98th Ave, Langley', qty: 45, shipBy: '2024-02-18' },
  { id: '14678', txn_number: 6786, shipAddress: '4230 Yew Street, Vancouver', qty: 16, shipBy: '2024-02-17' },
  { id: '15234', txn_number: 3263, shipAddress: '12-4970 Polkey Road, Duncan', qty: 1, shipBy: '2024-02-16' },
  { id: '16123', txn_number: 8642, shipAddress: '450 Denman Street, Vancouver', qty: 150, shipBy: '2024-02-19' },
  { id: '17986', txn_number: 1342, shipAddress: '96 North Bend Street, Coquitlam', qty: 44, shipBy: '2024-02-21' },
  { id: '18234', txn_number: 6795, shipAddress: '320 Seymour Blvd, North Vancouver', qty: 36, shipBy: '2024-02-22' },
  { id: '19765', txn_number: 3781, shipAddress: '110 - 6191 Westminster Hwy, Richmond', qty: 65, shipBy: '2024-02-23' },
];

export default function DeliveryTableInside() {
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
    <div className="container" style={{ marginBottom: 50 }}>
      
      <div className="search-container" style={{ display: 'flex' }}>
        <p className="small-regular mt-4 text-gray-600">Enter all box sizes, weights, insurance values before printing shipping labels.</p>
        <Button className="plus-button" onClick={toggleDialog} style={{ justifyContent: 'flex-end' }}>
            <img src="/assets/icons/plus-minus-solid.svg" alt="add" className="button-icon" />
            BOXES
        </Button>
        {isDialogOpen && <CreateDelivery onClose={toggleDialog} />}
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