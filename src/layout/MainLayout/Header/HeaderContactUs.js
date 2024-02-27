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
            <a href="tel:+375297953512">+375 (29) 795-35-12</a>
        </div>
    )
}