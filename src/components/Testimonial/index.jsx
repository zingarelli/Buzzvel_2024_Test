import styles from './Testimonial.module.css';

/**
 * Renders a text and content for an avatar.
 * @param {boolean} highlight - if true, changes some styles
 * @param {object} content - object with the testimonial data 
 */
export default function Testimonial({ highlight = false, content }) {
    const highlightStyle = highlight ? 'testimonial--highlight' : '';
    return (
        <blockquote className={`${styles.testimonial} ${styles[highlightStyle]}`}>
            <p>"{content.testimonial}"</p>
            <figure className={styles.avatar}>
                <img 
                    src={content.picture} 
                    className={styles.avatar__picture} 
                    alt={`Avatar of ${content.name}`} />
                <figcaption >
                    <p className={styles.avatar__name}>{content.name}</p>
                    <p className={styles.avatar__company}>{content.company}</p>
                </figcaption>
            </figure>
        </blockquote>
    );
}