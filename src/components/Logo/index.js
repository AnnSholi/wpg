'use client'
import Link from 'next/link';
import Image from "next/image";
import LightLogo from '../../../public/logo-light.svg';
import DarkLogo from '../../../public/logo-dark.svg';
import styles from './Logo.module.scss';

export default function Logo({ footer = false }) {
    return (
        <div className={`${styles.rightSide} ${footer ? styles.dark : ''}`}>
            <div className={styles.logo}>
                <Link href="/">
                    <Image 
                        src={footer ? DarkLogo : LightLogo} 
                        alt="Logo"
                    />
                </Link>
            </div>
            <span>
                Производство гидроизоляционных матриалов в Беларуси
            </span>
        </div>
    );
}
