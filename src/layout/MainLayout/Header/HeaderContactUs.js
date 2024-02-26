import Link from "next/link";
// import { useRouter } from 'next/router';
import styles from './Header.module.scss';

export function HeaderContactUs({options, activeMenu, setActiveMenu}) { 

    // const router = useRouter();

    const closeMenu = () => {
        setActiveMenu(!activeMenu);
        document.body.classList.remove("hidden");
    }

    return (
        <div className={styles.contactUs}>
            <span>Звоните Пн-Вс: 9:00 - 21:00</span>
            <a href="tel:+3758000000">+375 (800)-00-00</a>
        </div>
    )
}