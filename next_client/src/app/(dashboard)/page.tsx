'use client';

import { useCallback, useEffect, useState } from 'react';
import debounce from 'lodash/debounce';

import { DataGrid, GridColDef } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import DialogForm from '@/components/Dialog';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';

import AddIcon from '@mui/icons-material/Add';

import PageWrapper from '@/components/PageWrapper';

import styles from './home.module.scss';

const getProducts = async () => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/get-all`, {
		method: 'GET',
		mode: 'cors',
		credentials: 'include',
		cache: 'no-cache',
	});

	if (response.ok) {
		return await response.json();
	}
	else {
		return [];
	}
};

const createRawItem = async (data: any) => {
	console.log(data);
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/create-raw`, {
		method: 'POST',
		mode: 'cors',
		credentials: 'include',
		cache: 'no-cache',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
		next: {
			revalidate: 3600,
		},
	});

	return response.ok;
};

const editItem = async (id: string, data: any) => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/edit-raw/${id}`, {
		method: 'PUT',
		mode: 'cors',
		credentials: 'include',
		cache: 'no-cache',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});
	return response.ok;
};

const deleteItem = async (id: string) => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/delete/${id}`, {
		method: 'DELETE',
		mode: 'cors',
		credentials: 'include',
		cache: 'no-cache',
		headers: {
			'Content-Type': 'application/json',
		},
	});
	return response.ok;
};

export default function Home() {


	const columns: GridColDef[] = [
		{ field: 'name', headerName: 'Item', width: 300 },
		{ field: 'description', headerName: 'Description', width: 400 },
		{ field: 'salesOrder', headerName: 'SO#', width: 150 },
		{ field: 'qty', headerName: 'Qty', type: 'number', width: 120 },
		{
			field: 'shippingAddress',
			headerName: 'Ship Address',
			width: 300,
			valueGetter: (params) =>
				params.row.isManual ? params.row.shippingAddress.split(',').slice(1).join(',').trim() :
					`${params.row.shippingContact?.street}, ${params.row.shippingContact?.city}, ${params.row.shippingContact?.state}, ${params.row.shippingContact?.country}`,
		},
		{
			field: 'shipBy',
			headerName: 'Ship By',
			width: 150,
			type: 'string',
			valueGetter: ({ value }) => value && new Date(value),
		},
		{
			field: '_edit',
			headerName: 'Edit',
			width: 50,
			renderCell: (params) => {
				if (params.row.status === 'CREATED') {
					return (
						<IconButton
							aria-label="edit"
							onClick={(event) => {
								event.stopPropagation();
								handleEditDialogOpen(params.row);
							}}
							style={{ color: '#76B9CD' }}
						>
							<EditIcon />
						</IconButton>
					);
				}
				else {
					return <></>; // Render nothing if status is CREATED
				}
			},
		},
		{
			field: '_delete',
			headerName: 'Delete',
			width: 80,
			renderCell: (params) => {
				if (params.row.status === 'CREATED') {
					return (
						<IconButton
							aria-label="delete"
							onClick={(event) => {
								event.stopPropagation();
								handleDeleteDialogOpen(params.row);
							}}
							style={{ color: '#ED4337' }}
						>
							<DeleteIcon />
						</IconButton>
					);
				}
				else {
					return <></>;
				}
			},
		},
	];

	const [rawProducts, setRawProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [refreshCount, setRefreshCount] = useState(0);

	const [searchText, setSearchText] = useState('');

	const [isNewDialogOpen, setIsNewDialogOpen] = useState(false);
	const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
	const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

	const [shipBy, setShipBy] = useState<Dayjs | null>(dayjs(new Date()));
	const [data, setData] = useState({
		customer: '',
		billingAddress: '',
		shippingAddress: '',
		shippingMethod: 'Courier',
		name: '',
		description: '',
		qty: 0,
		shipBy: shipBy ? new Date(shipBy.format()) : new Date(),
		isManual: true,
	});
	const [currentEditProduct, setCurrentEditProduct] = useState({
		id: '',
		customer: '',
		billingAddress: '',
		shippingAddress: '',
		shippingMethod: 'Courier',
		name: '',
		description: '',
		qty: 0,
		shipBy: new Date(),
		isManual: true,
	});

	const handleNewDialogOpen = () => {
		setIsNewDialogOpen(true);
	};
	const handleNewDialogClose = () => {
		clearData();
		setIsNewDialogOpen(false);
	};

	const handleEditDialogOpen = (data: any) => {
		data = {
			...data,
			customer: data.shippingAddress.split(',')[0],
			shippingAddress: data.shippingAddress.split(',').slice(1).join(',').trim(),
		};
		setCurrentEditProduct(data);
		setIsEditDialogOpen(true);
	};

	const handleEditDialogClose = () => {
		setCurrentEditProduct({
			id: '',
			customer: '',
			billingAddress: '',
			shippingAddress: '',
			shippingMethod: '',
			name: '',
			description: '',
			qty: 0,
			shipBy: new Date(),
			isManual: true,
		});
		setIsEditDialogOpen(false);
	};

	const handleDeleteDialogOpen = (data: any) => {
		data = {
			...data,
			customer: data.shippingAddress.split(',')[0],
			shippingAddress: data.shippingAddress.split(',').slice(1).join(',').trim(),
		};
		setCurrentEditProduct(data);
		setIsDeleteDialogOpen(true);
	};

	const handleDeleteDialogClose = () => {
		setCurrentEditProduct({
			id: '',
			customer: '',
			billingAddress: '',
			shippingAddress: '',
			shippingMethod: '',
			name: '',
			description: '',
			qty: 0,
			shipBy: new Date(),
			isManual: true,
		});
		setIsDeleteDialogOpen(false);
	};

	const handleData = (e: React.ChangeEvent | any) => {
		const target = e.target as HTMLInputElement;
		if (target.name === 'qty') {
			setData({
				...data,
				qty: isNaN(parseInt(target.value)) ? 1 : parseInt(target.value),
			});
		}
		else {

			setData({
				...data,
				[target.name]: target.value,
			});
		}
	};

	const clearData = () => {
		setData({
			customer: '',
			billingAddress: '',
			shippingAddress: '',
			shippingMethod: '',
			name: '',
			description: '',
			qty: 0,
			shipBy: shipBy ? new Date(shipBy.format()) : new Date(),
			isManual: true,
		});

	};

	const handleEditData = (e: React.ChangeEvent | any) => {
		const target = e.target as HTMLInputElement;
		if (target.name === 'qty') {
			setCurrentEditProduct({
				...currentEditProduct,
				qty: isNaN(parseInt(target.value)) ? 1 : parseInt(target.value),
			});
		}
		else {
			setCurrentEditProduct({
				...currentEditProduct,
				[target.name]: target.value,
			});
		}

	};

	const debouncedSearch = useCallback(debounce((searchValue: string) => {
		const filtered = rawProducts.filter((row) =>
			Object.values(row).some((value) =>
				value?.toString().toLowerCase().includes(searchValue.toLowerCase()),
			),
		);
		setFilteredProducts(filtered);
	}, 500), [rawProducts]);
	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchText(e.target.value);
		debouncedSearch(e.target.value);
	};

	const handleSubmit = async () => {
		const mutatedData = {
			...data,
			shippingAddress: `${data.customer},\n${data.shippingAddress}`,
			shipBy: new Date(shipBy!.format()),
		};
		const response = await createRawItem(mutatedData);
		if (response) {
			handleNewDialogClose();
			setRefreshCount(refreshCount + 1);
		}
	};

	const handleEdit = async () => {
		const mutatedData = {
			...currentEditProduct,
			shippingAddress: `${currentEditProduct.customer},\n${currentEditProduct.shippingAddress}`,
			shipBy: currentEditProduct.shipBy,
		};
		const response = await editItem(currentEditProduct.id, mutatedData);
		if (response) {
			handleEditDialogClose();
			setRefreshCount(refreshCount + 1);
		}
	};

	const handleDelete = async () => {
		const response = await deleteItem(currentEditProduct.id);
		if (response) {
			handleDeleteDialogClose();
			setRefreshCount(refreshCount + 1);
		}
	};

	useEffect(() => {
		const fetchData = async () => {
			const products = await getProducts();
			setRawProducts(products);
			setFilteredProducts(products);
		};

		fetchData();
	}, [refreshCount]);

	// @ts-ignore
	return (
		<PageWrapper title={'Items to Package'}>
			<>
				<div className={styles['tools-bar']}>
					<TextField
						label="Search"
						variant="outlined"
						className="search-field"
						name={'search'}
						value={searchText}
						onChange={handleSearch}
					/>
					<Button className="plus-button" startIcon={<AddIcon />}
									sx={{ background: '#0F172A', color: 'white', '&:hover': { background: '#0F172A' } }} size={'large'}
									onClick={handleNewDialogOpen}>
						ITEM
					</Button>
				</div>
				<DataGrid
					rows={filteredProducts}
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
				<DialogForm title={'Create Item'} width={'sm'} isOpen={isNewDialogOpen} handleClose={handleNewDialogClose}
										handleSubmit={handleSubmit}>
					<div className={styles['dialog-content']}>
						<div className={styles['subtitle']}>
							Enter item details. Click save when you&apos;re done
						</div>
						<hr className={styles['divider']} />
						<div className={styles['line']}>
							<div className={styles['item']}>
								<label htmlFor={'customer'} className={styles['label']}>Customer</label>
								<input id="customer" type="text" className={styles['input']} name={'customer'} value={data.customer}
											 onChange={handleData} />
							</div>
						</div>
						<div className={styles['line']}>
							<div className={styles['item']}>
								<label htmlFor={'billingAddress'} className={styles['label']}>Billing Address</label>
								<textarea id="billingAddress" className={styles['textarea']} rows={5} name={'billingAddress'}
													value={data.billingAddress} onChange={handleData} />
							</div>
							<div className={styles['item']}>
								<label htmlFor={'shippingAddress'} className={styles['label']}>Shipping Address</label>
								<textarea id="shippingAddress" className={styles['textarea']} rows={5} name={'shippingAddress'}
													value={data.shippingAddress} onChange={handleData} />
							</div>
						</div>
						<div className={styles['line']}>
							<div className={styles['item']}>
								<label htmlFor={'shippingMethod'} className={styles['label']}>Shipping Method</label>
								<Select
									labelId="shippingMethod"
									id="shippingMethod"
									size={'small'}
									name={'shippingMethod'}
									value={data.shippingMethod}
									onChange={handleData}
									sx={{ marginTop: '5px', width: '50%' }}
								>
									<MenuItem value={'Courier'}> Courier</MenuItem>
									<MenuItem value={'TK Van'}>TK Van</MenuItem>
									<MenuItem value={'Call For Pickup'}>Call For Pickup</MenuItem>
								</Select>
							</div>
						</div>
						<hr className={styles['divider']} />
						<div className={styles['line']}>
							<div className={styles['item']}>
								<label htmlFor={'name'} className={styles['label']}>Item Name</label>
								<input id="name" type="text" className={styles['input']} name={'name'} value={data.name}
											 onChange={handleData} />
							</div>
						</div>
						<div className={styles['line']}>
							<div className={styles['item']}>
								<label htmlFor={'description'} className={styles['label']}>Description</label>
								<textarea id="description" className={styles['textarea']} rows={5} name={'description'}
													value={data.description} onChange={handleData} />
							</div>
						</div>
						<div className={styles['line']}>
							<div className={styles['item']}>
								<label htmlFor={'qty'} className={styles['label']}>qty</label>
								<input id="qty" type="text" className={styles['input']} name={'qty'} value={data.qty}
											 onChange={handleData} />
							</div>
							<div className={styles['item']}>
								<label htmlFor={'qty'} className={styles['label']}>Ship Date</label>
								<LocalizationProvider dateAdapter={AdapterDayjs}>
									<DatePicker
										sx={{ marginTop: '5px' }} name={'shipBy'} value={shipBy}
										onChange={(newValue) => setShipBy(newValue)} />
								</LocalizationProvider>
							</div>
						</div>
					</div>
				</DialogForm>
				<DialogForm title={'Edit Item'} width={'sm'} isOpen={isEditDialogOpen} handleClose={handleEditDialogClose}
										handleSubmit={handleEdit}>
					<div className={styles['dialog-content']}>
						<div className={styles['subtitle']}>
							Change item details. Click save when you&apos;re done
						</div>
						<hr className={styles['divider']} />
						<div className={styles['line']}>
							<div className={styles['item']}>
								<label htmlFor={'customer'} className={styles['label']}>Customer</label>
								<input id="customer" type="text" className={styles['input']} name={'customer'}
											 value={currentEditProduct.customer}
											 onChange={handleEditData} />
							</div>
						</div>
						<div className={styles['line']}>
							<div className={styles['item']}>
								<label htmlFor={'billingAddress'} className={styles['label']}>Billing Address</label>
								<textarea id="billingAddress" className={styles['textarea']} rows={5} name={'billingAddress'}
													value={currentEditProduct.billingAddress} onChange={handleEditData} />
							</div>
							<div className={styles['item']}>
								<label htmlFor={'shippingAddress'} className={styles['label']}>Shipping Address</label>
								<textarea id="shippingAddress" className={styles['textarea']} rows={5} name={'shippingAddress'}
													value={currentEditProduct.shippingAddress} onChange={handleEditData} />
							</div>
						</div>
						<div className={styles['line']}>
							<div className={styles['item']}>
								<label htmlFor={'shippingMethod'} className={styles['label']}>Shipping Method</label>
								<Select
									labelId="shippingMethod"
									id="shippingMethod"
									size={'small'}
									name={'shippingMethod'}
									value={currentEditProduct.shippingMethod}
									onChange={handleEditData}
									sx={{ marginTop: '5px', width: '50%' }}
								>
									<MenuItem value={'Courier'}> Courier</MenuItem>
									<MenuItem value={'TK Van'}>TK Van</MenuItem>
									<MenuItem value={'Call For Pickup'}>Call For Pickup</MenuItem>
								</Select>
							</div>
						</div>
						<hr className={styles['divider']} />
						<div className={styles['line']}>
							<div className={styles['item']}>
								<label htmlFor={'name'} className={styles['label']}>Item Name</label>
								<input id="name" type="text" className={styles['input']} name={'name'} value={currentEditProduct.name}
											 onChange={handleEditData} />
							</div>
						</div>
						<div className={styles['line']}>
							<div className={styles['item']}>
								<label htmlFor={'description'} className={styles['label']}>Description</label>
								<textarea id="description" className={styles['textarea']} rows={5} name={'description'}
													value={currentEditProduct.description} onChange={handleEditData} />
							</div>
						</div>
						<div className={styles['line']}>
							<div className={styles['item']}>
								<label htmlFor={'qty'} className={styles['label']}>qty</label>
								<input id="qty" type="text" className={styles['input']} name={'qty'} value={currentEditProduct.qty}
											 onChange={handleEditData} />
							</div>
							<div className={styles['item']}>
								<label htmlFor={'qty'} className={styles['label']}>Ship By</label>
								<LocalizationProvider dateAdapter={AdapterDayjs}>
									<DatePicker
										sx={{ marginTop: '5px' }} name={'shipBy'} value={dayjs(currentEditProduct.shipBy)}
										onChange={(newValue) => setCurrentEditProduct((prev) => ({
											...prev,
											shipBy: new Date(newValue!.format()),
										}))} />
								</LocalizationProvider>
							</div>
						</div>
					</div>
				</DialogForm>
				<DialogForm title={'Please click submit to delete'} width={'sm'} isOpen={isDeleteDialogOpen}
										handleClose={handleDeleteDialogClose}
										handleSubmit={handleDelete}>
					<div className={styles['dialog-content']}>
						<div className={styles['subtitle']}>
							Are you sure you want to delete the item - {currentEditProduct.name}?
						</div>
					</div>
				</DialogForm>
			</>
		</PageWrapper>
	);
}
