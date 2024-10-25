import styles from './InfoCard.module.css';

/**
 * Renders a card with an image, title and content as children.
 * @param {string} image - path to the image source.
 * @param {string} imageAlt - alt text for the image.
 * @param {string} title - text for the title.
 * @returns 
 */
export default function InfoCard({ image, imageAlt, title, children }) {
    return (
        <article className={styles.article}>
            <img
                src={image}
                alt={imageAlt || 'Picture illustrating the article'}
                className={styles.article__image}
            />
            <h2 className={styles.article__title}>{title}</h2>
            <p className={styles.article__content}>{children}</p>
        </article>
    );
}