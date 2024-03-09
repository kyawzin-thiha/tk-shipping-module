'use client';

import { useCallback, useEffect, useState } from 'react';
import debounce from 'lodash/debounce';

import { DataGrid, GridColDef } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DialogForm from '@/components/Dialog';

import AddIcon from '@mui/icons-material/Add';

import PageWrapper from '@/components/PageWrapper';

import styles from '../home.module.scss';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const getBoxes = async () => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/box/get-all`, {
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

export default function Home() {

	const BoxColumns: GridColDef[] = [
		{ field: 'name', headerName: 'Name', width: 200 },
		{
			field: 'contents',
			headerName: 'Contents',
			width: 400,
			renderCell: (params) => (
				<div style={{ whiteSpace: 'pre-line' }}>{params.value}</div>
			),
		},
		{ field: 'shipMethod', headerName: 'Ship Method', width: 200 },
		{ field: 'shipAddress', headerName: 'Ship Address', width: 300 },
		{ field: 'shipBy', headerName: 'Ship By', width: 200, type: 'date' },
	];

	const PackageColumns: GridColDef[] = [
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
			field: "_qty",
			headerName: "Qty",
			width: 150,
			renderCell: (params) => {
				return (
					<div>
						<TextField id="outlined-basic" variant="outlined" fullWidth size={"small"} name={"qty"} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
							const inputQty = isNaN(parseInt(e.target.value)) ? 1 : parseInt(e.target.value);
							if(inputQty > params.row.remainingQty) {
								e.target.value = params.row.remainingQty;
							}
							if(!e.target.value || parseInt(e.target.value) <= 0) {
								e.target.value = "";
								handleRemoveProduct(params.row);
								return;
							}
							handleSelectProduct(params.row, e.target.value);
						}} />
					</div>
				)
			}
		}
	];

	const [rawBoxes, setRawBoxes] = useState([]);
	const [filteredBoxes, setFilteredBoxes] = useState([]);

	const [rawProducts, setRawProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [selectedProducts, setSelectedProducts] = useState([]);
	const tempSelectedProductsIds = new Set();

	const [refreshCount, setRefreshCount] = useState(0);

	const [searchText, setSearchText] = useState('');

	const [isDialogOpen, setIsDialogOpen] = useState(false);

	const handleDialogOpen = () => {
		setIsDialogOpen(true);
	};
	const handleDialogClose = () => {
		setIsDialogOpen(false);
	};

	const debouncedSearch = useCallback(debounce((searchValue: string) => {
		const filtered = rawBoxes.filter((row) =>
			Object.values(row).some((value) =>
				value?.toString().toLowerCase().includes(searchValue.toLowerCase()),
			),
		);
		setFilteredBoxes(filtered);
	}, 500), [rawBoxes]);
	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchText(e.target.value);
		debouncedSearch(e.target.value);
	};

	const handleSubmit = async () => {
		console.log("This is box submit function")
		console.log(selectedProducts);
	};


	const handleSelectProduct = (data: any, inputQty: string) => {
		const qty = isNaN(parseInt(inputQty)) ? 1 : parseInt(inputQty);
		data.inputQty = qty;

		const isExist = selectedProducts.find((row: any) => row.id === data.id);
		console.log(isExist);

		//@ts-ignore
		setSelectedProducts((prev) => [...prev, data]);
		const filtered = rawProducts.filter((row : any) => {
			return matchStrings(row.shippingAddress, data.shippingAddress) && matchStrings(row.billingAddress, data.billingAddress);
		});
		setFilteredProducts(filtered);
	}



	const handleRemoveProduct = (data: any) => {
		// @ts-ignore
		const filtered = selectedProducts.filter((row) => row.id !== data.id);
		setSelectedProducts(() => filtered);
		if(filtered.length === 0) {
			setFilteredProducts(rawProducts);
		}
	}

	const matchStrings = (a: string, b: string) => {
		return a.toLowerCase().replace(/ /g,'') === b.toLowerCase().replace(/ /g,'');
	}

	useEffect(() => {
		const fetchData = async () => {
			const boxes = await getBoxes();
			const products = await getProducts();

			setRawBoxes(boxes);
			setFilteredBoxes(boxes);
			setRawProducts(products);
			setFilteredProducts(products);
		};

		fetchData();
	}, [refreshCount]);

	// @ts-ignore
	return (
		<PageWrapper title={'Boxes'}>
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
									onClick={handleDialogOpen}>
						Box
					</Button>
				</div>
				<DataGrid
					rows={filteredBoxes}
					columns={BoxColumns}
					autoHeight
					disableRowSelectionOnClick
					initialState={{
						pagination: {
							paginationModel: { page: 0, pageSize: 10 },
						},
					}}
					pageSizeOptions={[10, 20, 50]}
				/>
				<DialogForm title={'Create New Box'} width={'lg'} isOpen={isDialogOpen} handleClose={handleDialogClose}
										handleSubmit={handleSubmit}>
					<div className={styles['dialog-content']}>
						<div className={styles['subtitle']}>
							Only items with same shipping and billing address can be added to the same box.
						</div>
						<hr className={styles['divider']} />
						<div className={styles['line']}>
							<div className={styles['item']}>
								<label htmlFor={'boxType'} className={styles['label']}>Package Type</label>
								<Select
									id="boxType"
									size={'small'}
									name={'boxType'}
									sx={{ marginTop: '5px', width: '300px' }}
									defaultValue={'Box'}
								>
									<MenuItem value={'Box'}>Box</MenuItem>
									<MenuItem value={'Roll'}>Roll</MenuItem>
									<MenuItem value={'Custom'}>Custom</MenuItem>
									<MenuItem value={'Envelope'}>Envelope</MenuItem>
								</Select>
							</div>
						</div>
						<div className={styles['line']}>
							<div className={styles['item']}>
								<DataGrid
									rows={filteredProducts}
									columns={PackageColumns}
									autoHeight
									disableRowSelectionOnClick
									columnVisibilityModel={{}}
									initialState={{
										pagination: {
											paginationModel: { page: 0, pageSize: 10 },
										},
									}}
									pageSizeOptions={[10, 20, 50]}
								/>
							</div>
						</div>
					</div>
				</DialogForm>
			</>
		</PageWrapper>
	);
}

function preprocessBoxesData(boxes: Box[]) {
	return boxes.map((box) => {
		const contents = box.contents.map((content) => `- ${content.product.description}`).join('\n');
		const shipMethods = box.contents.map((content) => content.product.shipMethod);
		const shipAddresses = box.contents.map((content) => content.product.shippingAddress);
		const shipBys = box.contents.map((content) => content.product.shipBy);

		return {
			id: box.id,
			name: box.name || 'N/A',
			contents,
			shipMethod: shipMethods[0] || 'N/A',
			shipAddress: shipAddresses[0] || 'N/A',
			shipBy: new Date(Math.min(...shipBys.map((date) => new Date(date).getTime()))),
		};
	});
}

type Box = {
	id: string;
	name: string | null;
	contents: {
		product: {
			description: string;
			shippingAddress: string;
			shipMethod: string;
			shipBy: Date;
		};
		qty: number;
	}[];
	createdAt: Date;
	updatedAt: Date;
};
