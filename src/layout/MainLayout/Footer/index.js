'use client'
import Link from 'next/link';
import styles from './Footer.module.scss';

import Logo from '@/components/Logo';

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className="container">
          <div className={styles.wrap}>
            <Logo footer={true} />
            <div className={styles.copyright}>
                <p>Copyright</p>
                <p>Все права защищены</p>
                <Link href="/">Политика Конфидециальности</Link>
            </div>
          </div>
        </div>
    </footer>
  );
}
