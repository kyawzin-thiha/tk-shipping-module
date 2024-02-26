'use client';

import Link from 'next/link';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import styles from '../auth.module.scss';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const login = async (data: { identifier: string, password: string }) => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
		mode: 'cors',
		credentials: 'include',
		cache: 'no-cache',
	});

	return response.ok;
};
export default function Page() {

	const router = useRouter();
	const [data, setData] = useState({
		identifier: '',
		password: '',
	});

	const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const response = await login(data);
		if (response) {
			router.replace('/');
		}
	};

	return (
		<>
			<div className={styles['title']}>
				Login
			</div>
			<form className={styles['form-container']} onSubmit={handleSubmit}>
				<div className={styles['input']}>
					<TextField label="Username" variant="outlined" fullWidth required name={'identifier'} onChange={handleData} />
				</div>
				<div className={styles['input']}>
					<TextField label="Password" variant="outlined" fullWidth required name={'password'} onChange={handleData} />
				</div>
				<div className={styles['button']}>
					<Button variant="contained" type={'submit'} fullWidth>Login</Button>
				</div>
				<hr className={styles['divider']} />
				<div className={styles['button']}>
					<Link href={'/register'}>
						<Button variant="contained" fullWidth
										type="button"
										sx={{ background: '#B5E3C8', '&:hover': { background: '#B5E3C8' } }}
										disableElevation>Register</Button>
					</Link>
				</div>
			</form>
		</>
	);
}