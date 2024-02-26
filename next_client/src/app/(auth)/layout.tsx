import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import styles from './auth.module.scss';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'T.K. Graphics - Login',
	description: 'Login to your account.',
};

const authenticate = async (token: string) => {
	const response = await fetch(`${process.env.API_URL}/auth/authenticate`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Cookie: `token=${token}`,
		},
		credentials: 'include',
		mode: 'cors',
		cache: 'no-cache',
	});

	return response.ok;
};


export default async function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {

	const cookiesStorage = cookies();
	const token = cookiesStorage.get('token')?.value;

	const response = await authenticate(token!);

	if (response) {
		redirect('/');
	}


	return (
		<html lang="en">
		<body className={inter.className}>
		<main>
			<div className={styles['form']}>
				{children}
			</div>
		</main>
		</body>
		</html>
	);
}
