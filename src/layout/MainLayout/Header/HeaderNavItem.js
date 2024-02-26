'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
// import { useEffect, useMemo } from "react";
import styles from './Header.module.scss';

export function HeaderNavItem({label, url, activeItem, activeMenu, setActiveMenu, target}) {
    const pathname = usePathname();
    // const router = useRouter();

    // const closeMenu = () => {
    //     setActiveMenu(!activeMenu);
    //     document.body.classList.remove("hidden");
    // }

    // const smoothScroll = (elem) => {
    //     elem.forEach(anchor => {
    //         anchor?.addEventListener('click', function (e) {
    //             e.preventDefault(anchor);
    //             let href = this.getAttribute('href');
    //             let convertHref = Object.assign([], href).splice(1).join('');
    //             document.querySelector(convertHref).scrollIntoView({
    //                 behavior: 'smooth'
    //             });
    //         });
    //     });
    // }

    // useEffect(() => {

    //     let hrefs = document.querySelectorAll('a[href^="/#"]');

    //     if(router.route == "/"){
    //         smoothScroll(hrefs);
    //     }

    // }, []);



    return (
        <li className={`${url === `/#${activeItem?.id}` ? styles.active : ''}`} >
            <Link href={`${pathname}#${url}`}>
                {label}
            </Link>
        </li>

        // <li className={`
        //     ${url === `/#${activeItem?.id}` ? styles.active : ''} `
        // }>    
        //     <Link 
        //         href={url}
        //         onClick={closeMenu}
        //         className={`${target != null ? styles.blank : ''} `}
        //     >
        //         {label}
        //     </Link>
        // </li>
    )
}