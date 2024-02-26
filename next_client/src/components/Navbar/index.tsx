import Image from 'next/image';
import Link from 'next/link';

import Logo from '@/assets/images/TKGraphics.png';

import ItemIcon from '@/assets/icons/item.svg';
import BoxesIcon from '@/assets/icons/boxes.svg';
import DeliveryIcon from '@/assets/icons/delivery.svg';
import FolderIcon from '@/assets/icons/folder.svg';
import SearchIcon from '@/assets/icons/search.svg';
import LogoutIcon from '@/assets/icons/logout.svg';

import styles from './nav-bar.module.scss';

export default function Navbar({ user }: { user: string }) {
	return (
		<nav className={styles['nav-container']}>
			<div className={styles['nav']}>
				<div className={styles['logo-container']}>
					<Image src={Logo} alt={'Logo'} fill={true} />
				</div>
				<div className={styles['user-container']}>
					<div className={styles['profile']}>
					</div>
					<div className={styles['name']}>
						{user}
					</div>
				</div>
				<div className={styles['menu-container']}>
					<Link href={'/'} className={styles['link']}>
						<div className={styles['icon']}>
							<Image src={ItemIcon} alt={'Items'} />
						</div>
						<div className={styles['text']}>
							Items
						</div>
					</Link>
					<Link href={'/boxes'} className={styles['link']}>
						<div className={styles['icon']}>
							<Image src={BoxesIcon} alt={'Boxes'} />
						</div>
						<div className={styles['text']}>
							Boxes
						</div>
					</Link>
					<Link href={'/deliveries'} className={styles['link']}>
						<div className={styles['icon']}>
							<Image src={DeliveryIcon} alt={'Deliveries'} />
						</div>
						<div className={styles['text']}>
							Deliveries
						</div>
					</Link>
				</div>
				<hr className={styles['divider']} />
				<div className={styles['menu-container']}>
					<Link href={'/reports'} className={styles['link']}>
						<div className={styles['icon']}>
							<Image src={FolderIcon} alt={'Reports'} />
						</div>
						<div className={styles['text']}>
							Reports
						</div>
					</Link>
					<Link href={'/history'} className={styles['link']}>
						<div className={styles['icon']}>
							<Image src={SearchIcon} alt={'History'} />
						</div>
						<div className={styles['text']}>
							History
						</div>
					</Link>
				</div>
				<hr className={styles['divider']} />
				<div className={styles['menu-container']}>
					<button className={styles['link']}>
						<div className={styles['icon']}>
							<Image src={LogoutIcon} alt={'LogOut'} />
						</div>
						<div className={styles['text']}>
							Logout
						</div>
					</button>
				</div>
			</div>
		</nav>
	);
}