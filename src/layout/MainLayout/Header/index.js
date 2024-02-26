'use client'
// import { useRouter } from 'next/router';
// import { AppProvider } from '../../../src/pages/_app';
import { useContext, useState } from 'react';
// import Headroom from "react-headroom";

import { HeaderContactUs } from "./HeaderContactUs";
import Logo from '@/components/Logo';
import { HeaderNav } from "./HeaderNav";

import styles from './Header.module.scss';

export function Header() {

    // const router = useRouter();

    // const { options, menu } = useContext(AppProvider);

    const [activeMenu, setActiveMenu] = useState(false);

    const openMenu = () => {
        setActiveMenu(!activeMenu);
        document.body.classList[!activeMenu ? 'add' : 'remove']('hidden');
    }

    return (
        // <Headroom className={styles.headerWrap} pinStart={introHeight}>
            <header 
                className={`${styles.header} container`}
            >
                <div className = {styles.wrapper}>
                    <div className={styles.topPart}>
                        <Logo />

                        <div 
                            className = {`${styles.navigation} ${activeMenu ? styles.open : ''}`}
                        >
                            <div className={styles.wrap}>
                                <div className={styles.scrolledWrap}>
                                    <HeaderNav
                                        activeMenu = { activeMenu }
                                        setActiveMenu = { setActiveMenu }
                                    />
                                </div>
                            </div>
                        </div>

                        <HeaderContactUs />

                        <div 
                        onClick = {openMenu}
                        style={ { display: activeMenu ? 'block' : 'none' } }  
                        className={styles.mask}></div>

                        <div 
                            className={`
                                ${styles.burger} 
                                ${activeMenu ? styles.active : ''} 
                            `} 
                            onClick = {openMenu}
                        >
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    
                    {/* <div 
                        className = {`${styles.navigation} ${activeMenu ? styles.open : ''}`}
                    >
                        <div className={styles.wrap}>
                            <div className={styles.scrolledWrap}>
                                <HeaderNav />
                            </div>
                        </div>
                    </div> */}
                </div>
            </header>
        // </Headroom>
    )
}