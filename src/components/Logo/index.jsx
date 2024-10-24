import styles from './Logo.module.css';
import logoIcon from '../../assets/logo.png';

/**
 * Displays the name and optional image for the brand.
 * @param {boolean} displayImage - if true, image is displayed.
 */
export default function Logo({ displayImage=false }) {
    const fontSize = displayImage ? 'var(--xl)' : 'var(--heading-1)';
    const brandName = displayImage ? 'Soller' : 'soller'
    return (
        <figure className={styles.wrapper}>
            {displayImage && <img className={styles.logo} src={logoIcon} alt="Soller logo" />}
            <span className={styles.text} style={{fontSize: fontSize}}>{brandName}</span>
        </figure>
    )
}