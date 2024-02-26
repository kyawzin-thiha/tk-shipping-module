'use client';

import Link from 'next/link';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import styles from '../auth.module.scss';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const register = async (data: { name: string, username: string, email: string, password: string }) => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
		mode: 'cors',
		credentials: 'include',
	});

	return response.ok;

};
export default function Page() {

	const router = useRouter();
	const [data, setDate] = useState({
		name: '',
		username: '',
		email: '',
		password: '',
	});

	const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
		setDate({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(data);

		const response = await register(data);
		if (response) {
			router.replace('/');
		}
	};

	return (
		<>
			<div className={styles['title']}>
				Register
			</div>
			<form className={styles['form-container']} onSubmit={handleSubmit}>
				<div className={styles['input']}>
					<TextField label="Name" variant="outlined" fullWidth required name={'name'} onChange={handleData} />
				</div>
				<div className={styles['input']}>
					<TextField label="Username" variant="outlined" fullWidth required name={'username'} onChange={handleData} />
				</div>
				<div className={styles['input']}>
					<TextField label="Email" variant="outlined" fullWidth required name={'email'} onChange={handleData} />
				</div>
				<div className={styles['input']}>
					<TextField label="Password" variant="outlined" fullWidth required name={'password'} onChange={handleData} />
				</div>
				<div className={styles['button']}>
					<Button variant="contained" type={'submit'} fullWidth>Register</Button>
				</div>
				<hr className={styles['divider']} />
				<div className={styles['button']}>
					<Link href={'/login'}>
						<Button variant="contained" fullWidth
										type="button"
										sx={{ background: '#B5E3C8', '&:hover': { background: '#B5E3C8' } }}
										disableElevation>Login</Button>
					</Link>
				</div>

			</form>
		</>
	);
}