import styles from './Heading.module.css';

/**
 * Renders a heading and an optional superior heading.
 * @param {string} supTitle - text for the superior heading.
 * @param {string} theme - theme colors (primary | secondary). 
 * Default is primary.
 */
export default function Heading({ supTitle, theme = 'primary', children }) {
    return (
        <>
            {supTitle && <h3
                className={`${styles.supTitle} ${styles[`supTitle--${theme}`]}`}>
                {supTitle}
            </h3>}
            <h2 className={`${styles.title} ${styles[theme]}`}>{children}</h2>
        </>
    )
}