import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import Navbar from '@/components/Navbar';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'T.K. Graphics',
	description: 'T.K. Graphics - Pack the items and ship them in one place',
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

const getUser = async (token: string) => {
	const response = await fetch(`${process.env.API_URL}/user`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Cookie: `token=${token}`,
		},
		credentials: 'include',
		mode: 'cors',
		cache: 'no-cache',
	});

	if (response.ok) {
		return await response.json();
	}
	else {
		return null;

	}

};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {

	const cookiesStorage = cookies();
	const token = cookiesStorage.get('token')?.value;

	if (!token) {
		redirect('/login');
	}

	const response = await authenticate(token!);

	if (!response) {
		redirect('/login');
	}

	const user = await getUser(token!);

	return (
		<html lang="en">
		<body className={inter.className}>
		<Navbar user={user.name} />
		<main>
			{children}
		</main>
		</body>
		</html>
	);
}
