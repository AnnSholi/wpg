'use client'
import { useState, useRef, useEffect } from 'react';
import Button from '@/components/Button';
import styles from './Faq.module.scss';

export function FaqItem({ question, answer }) {

    const [isOpen, setIsOpen] = useState(false);
    const answerRef = useRef(null);

    const itemClass = isOpen ? `${styles.active}` : "";

    useEffect(() => {
        if (isOpen) {
          answerRef.current.style.maxHeight = `${answerRef.current.scrollHeight}px`;
        } else {
          answerRef.current.style.maxHeight = '0';
        }
    }, [isOpen]);

    return (
        <div className={`${styles.faqItem} ${itemClass}`}>
            <h3 className={styles.faqQuestion} onClick={() => setIsOpen(!isOpen)}>
                {question}
                <span className={styles.toggle}>{isOpen ? '−' : '+'}</span>
            </h3>
            <div ref={answerRef} className={styles.answer}>{answer}</div>
        </div>
      );
}