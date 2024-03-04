'use client'
import { useState } from 'react';
import styles from './Modal.module.scss';

import Button from '../Button';

export default function Modal({showSuccessModal, setShowSuccessModal}) {
    const closeModal = () => {
        setShowSuccessModal(false);
    };
    return (
        <>
            {showSuccessModal && (
                <div className={styles.successModal}>
                        <div className={styles.modalContent}>
                            <span className={styles.text}>Спасибо за ваш запрос!</span>
                            <p> Мы скоро с вами свяжемся.</p>
                            <button
                                onClick={closeModal}
                            >Закрыть</button>
                    </div>
                </div>
            )}
        </>
    );
}
