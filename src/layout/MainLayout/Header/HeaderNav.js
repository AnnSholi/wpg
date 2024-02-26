'use client'
import { useEffect, useState, useMemo } from 'react';
import { HeaderNavItem } from "./HeaderNavItem";
import styles from './Header.module.scss';

const menu = [
    {
        url: '#usage',
        id: '1', 
        label: 'Использование',
    },
    {
        url: '#features',
        id: '2', 
        label: 'Преимущества',
    },
    {
        url: '#faq',
        id: '3', 
        label: 'Вопросы',
    },
    {
        url: '#contacts',
        id: '4', 
        label: 'Контакты',
    },
]

export function HeaderNav() {

    // const [activeItem, setActiveItem] = useState(false);
    // const [_document, set_document] = useState(null)

    // const withHash = useMemo(() => {
    //     return menu?.filter((el) => {
    //         return el.url.split('')[1] === '#';
    //     })
    // }, [menu]) 

    // useEffect(() => {
    //     set_document(document)
    // }, [])

    // const getSections = useMemo(() => {
    //     return withHash.map((el) => {
    
    //         const items = el.url; 

    //         let anchors = _document?.querySelector(Object.assign([], items).splice(1).join(''));

    //         return anchors;
            
    //     })
    // }, [withHash, _document])

    // useEffect(() => {

    //     const highlightAnchor = () => {
        
    //         let winScroll = window.scrollY;
    //         let active = false;
    
    //         getSections?.forEach(el => {
    //             if(el){
    //                 if(el?.offsetTop <= winScroll && 
    //                     el?.offsetTop + el?.offsetHeight > winScroll){
    //                         active = el
    //                     } 
    //             }
    //         })
    //         setActiveItem(active)
    //     }

    //     window.addEventListener('scroll', highlightAnchor, false);
    //     return () => {
    //         window.removeEventListener('scroll', highlightAnchor, false);
    //       }
    // }, [getSections]);
    

    return (
        <>
            <nav 
                className={`${styles.nav}`}
            >
                <ul>
                    {menu?.map((el) => {
                        const {id, label, url} = el;
                        return(
                            <HeaderNavItem 
                                key={id}
                                label={label}
                                url={url}
                                // activeItem={activeItem}
                                // activeMenu={activeMenu}
                                // setActiveMenu={setActiveMenu}
                            />
                        )
                    })}  
                </ul>              
            </nav> 
        </>
    )
}