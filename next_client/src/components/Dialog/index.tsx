'use client';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


export default function DialogForm({ title, isOpen, handleClose, handleSubmit, width = 'sm', children }: {
	title: string,
	isOpen: boolean,
	handleClose: () => void,
	handleSubmit: () => void,
	width: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
	children: React.ReactNode
}) {
	return (
		<>
			<Dialog
				open={isOpen}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
				fullWidth={true}
				maxWidth={width}
			>
				<DialogTitle id="alert-dialog-title" fontWeight={600} sx={{ fontSize: '30px' }}>
					{title}
				</DialogTitle>
				<DialogContent>
					{children}
				</DialogContent>
				<DialogActions>
					<Button onClick={handleSubmit} variant={'contained'}
									sx={{ background: '#0F172A', '&:hover': { background: '#0F172A' } }}
					>
						Submit
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}