import styles from './page-wrapper.module.scss';

export default function PageWrapper({title, children}: { title: string, children: React.ReactNode }) {
    return (
        <div className={styles['page-wrapper']} id={title.toLowerCase().replace(/\s+/g, '-')}>
            <div className={styles['title']}>
                {title}
            </div>
            <div className={styles['children']}>
                {children}
            </div>
        </div>
    );
}