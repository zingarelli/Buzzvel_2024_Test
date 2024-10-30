import styles from './MenuButton.module.css'
import icon from '../../assets/plus-sign.png';
import { useState } from 'react';

/**
 * Renders the button for the menu on the landing page. 
 * Content expands during the onclick event.
 * @param {string} className - additional styles are applied to the button.
 */
export default function MenuButton({ className }) {
    const [expanded, setExpanded] = useState(false);
    const textStyles = expanded 
        ? `${styles.button__text} ${styles['button__text--active']}`
        : styles.button__text;

    return (
        <button
            className={`${styles.button} ${className}`}
            onClick={() => setExpanded(!expanded)}
        >
            <img
                src={icon}
                alt="icon of a plus sign to expand the button"
                className={styles.button__icon}
            />
            <span className={textStyles} >Request a Quote</span>
        </button>
    )
}