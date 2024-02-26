'use client'
import { usePathname } from "next/navigation";
import Button from '@/components/Button';
import styles from './Banner.module.scss';

export function Banner() {
    const pathname = usePathname();

    return (
        <div className={styles.banner}>
            <div className="container">
                <div className={styles.heading}>
                    <h1>
                        Жидкая битумно-латексная гидроизоляция кровли
                    </h1>
                    <p>по голландской технологии от производителей в Беларуси</p>
                </div>
                <div className={styles.btns}>
                    <Button 
                        text={'Получить образец'}
                        url={`${pathname}##contacts`}
                        type={'contrast'}
                    />
                    <Button 
                        text={'Подробнее'}
                        url={`${pathname}##faq`}
                        type={'light'}
                    />
                </div>
                {/* <div className={styles.features}>
                    <div>
                        <p>произведём нужный объем за 3 дня</p>
                    </div>
                    <div>
                        <p>гарантия на продукцию 5 лет</p>
                    </div>
                    <div>
                        <p>обучим и окажем тех. поддержку</p>
                    </div>
                    <div>
                        <p>предоставим необходимое оборудование</p>
                    </div>
                </div> */}
                {/* <div className={styles.grid}>
                    <a
                    href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <h2>
                        Производство <span>-&gt;</span>
                    </h2>
                    <p>произведём нужный объем за 3 дня</p>
                    </a>

                    <a
                    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <h2>
                        Гарантия <span>-&gt;</span>
                    </h2>
                    <p>гарантия на продукцию 5 лет</p>
                    </a>

                    <a
                    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <h2>
                        Обучение <span>-&gt;</span>
                    </h2>
                    <p>обучим и окажем тех. поддержку.</p>
                    </a>

                    <a
                    href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <h2>
                        Оборудование <span>-&gt;</span>
                    </h2>
                    <p>
                    предоставим необходимое оборудование
                    </p>
                    </a>
                </div> */}
            </div>
        </div>
    )
}