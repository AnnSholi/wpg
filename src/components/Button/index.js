import styles from './Button.module.scss';

export default function Button({ text, type, url }) {
  return (
    <>
      <a className={`${styles.button} ${type === 'contrast' ? styles.contrast : type === 'light' ? styles.light : styles.ghost} `} href={url}>
        <span
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        ></span>
      </a>
    </>
  );
}
