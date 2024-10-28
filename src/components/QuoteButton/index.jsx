import ArrowRight from '../Icons/ArrowRight';
import styles from './QuoteButton.module.css';

/**
 * For now this renders a button with the text "Request a quote".
 * We could change it later to use other props and children to 
 * make it more generic.
 * @param {string} theme - change the color (purple | orange). 
 * Default is purple.
 */
export default function QuoteButton({ theme = 'purple' }) {
    const classTheme = theme === 'purple' ? 'purpleTheme' : 'orangeTheme';
    return (
        <button className={`${styles.button} ${styles[classTheme]}`}>
            Request a Quote <ArrowRight theme={theme} />
        </button>
    )
}