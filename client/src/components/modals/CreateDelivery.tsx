import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from "@/components/ui/button";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';


  const packagetype = [
    {
      value: "box",
      label: "Box",
    },
    {
      value: "roll",
      label: "Roll",
    },
    {
      value: "custom",
      label: "Custom",
    },
    {
        value: "envelope",
        label: "Envelope",
    },
  ]

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Box #', width: 100 },
    { field: 'contents', headerName: 'Contents', width: 400 },
    { field: 'so', headerName: 'SO #', width: 110 },
    { field: 'shipaddress', headerName: 'Ship Address', width: 250 },
    { field: 'remain', headerName: 'Ship Method', width: 130 },
    { field: 'shipby', headerName: 'Ship By', width: 130 },
  ];
  
  /* Remove when real data populated */
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
  

function CreateItem({ onClose }) {
    const handleClose = () => {
        onClose();
    };


  return (
    <Dialog open={true} onClose={handleClose} className="custom-dialog">
    <DialogContent className="custom-dialog-content sm:min-w-[1255px]">
        <DialogHeader className="custom-dialog-header">
        <DialogTitle className="custom-dialog-title">
            Add Boxes to Delivery
        </DialogTitle>
        <Button className="close-button" onClick={handleClose}>
            <CloseIcon />
        </Button>
        <DialogDescription className="custom-dialog-description">
            Only boxes with the same Ship Address can get added to the same Delivery.
        </DialogDescription>
        </DialogHeader>
        <br/>
        {/* Your dialog content goes here */}
        <div className="grid grid-cols-2 gap-4">
        
        </div>
        <div style={{ width: '100%' }}>
        <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
            pagination: {
                paginationModel: { page: 0, pageSize: 7 },
            },
            }}
            pageSizeOptions={[7]}
            checkboxSelection
        />
        </div>
        
        <DialogFooter className="custom-dialog-footer">
          <Button onClick={handleClose} className="custom-create-button">Save Delivery</Button>
        </DialogFooter>

    </DialogContent>
    </Dialog>

  );
}

export default CreateItem;
