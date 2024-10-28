import Heading from '../Heading';
import styles from './Article.module.css';

/**
 * Template to display an article, with a title, another small title on top, 
 * and a introductory text. Renders the rest of the content as children. 
 * A different theme can be applied to change some of the colors.
 * @param {string} title - text for the title.
 * @param {string} supTitle - text for the small title.
 * @param {string} introduction - text for the introductory section.
 * @param {string} theme - theme colors (primary | secondary). Default is 
 * primary.
 */
export default function Article({
    title,
    supTitle,
    introduction,
    theme = 'primary',
    children
}) {
    return (
        <article className={`${styles.article} ${styles[`article--${theme}`]}`}>
            <Heading supTitle={supTitle} theme={theme}>{title}</Heading>
            <p className={`${styles.article__intro} ${styles[`article__intro--${theme}`]}`}>
                {introduction}
            </p>
            {children}
        </article>
    );
}