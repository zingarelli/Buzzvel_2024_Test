import Heading from '../Heading';
import styles from './Article.module.css';

/**
 * Template to display an article, with a title, another small title on top, 
 * and a introductory text. Renders the rest of the content as children.
 * @param {string} title - text for the title.
 * @param {string} supTitle - text for the small title.
 * @param {string} introduction - text for the introductory section.
 */
export default function Article({ title, supTitle, introduction, children}) {
    return (
        <article className={styles.article}>
            <Heading supTitle={supTitle}>{title}</Heading>
            <p className={styles.article__intro}>{introduction}</p>
            {children}
        </article>
    );
}