'use client'
import Button from '@/components/Button';
import styles from './Features.module.scss';

export function Features() {

    return (
        <div id="#features" className={styles.features}>
            <div className="container with-padding">
                <div className={styles.heading}>
                    <span>Преимущества напыляемой гидроизоляции в сравнении с рулонной</span>
                    <h2>Почему рулонная гидроизоляция — прошлый век?</h2>
                </div>
                <div className={styles.comparison}>
                    <div className={styles.item}>
                        <h3>Рулонная гидроизоляция</h3>
                        <span>устаревшая система и подход к гидроизоляции, применяемый с 20 века</span>
                        <ul>
                            <li>не подходит для неровных поверхностей</li>
                            <li>требует сварки или склеивания</li>
                            <li>устанавливается в 2 раза дольше</li>
                            <li>возможно образование скрытых дефектов</li>
                            <li>склонна к механическим повреждениям</li>
                            <li>требует демонтажа старой гидроизоляции</li>
                        </ul>
                    </div>
                    <div className={`${styles.item} ${styles.checked}`}>
                        <h3>Напыляемая жидкая гидроизоляция</h3>
                        <span>современная экологичная система гидроизоляции, применяемая на объектах любой сложности</span>
                        <ul>
                            <li>легко наносится на любой форме поверхности</li>
                            <li>бесшовная структура = 100: герметичность</li>
                            <li>высокая адгезия к любым поверхностям</li>
                            <li>более долговечна к погодным условиям</li>
                            <li>экологически безопасна на 100:</li>
                            <li>самовосстановление за счет эластичности</li>
                            <li>срок службы более 20 лет</li>
                            <li>не требует демонтажа старой гидроизоляции</li>
                        </ul>
                        <div className={styles.mark}>
                            Выбираю надёжный способ гидроизоляции
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}