import styles from './TestimonialCard.module.css';
import Testimonial from '../Testimonial';

/**
 * Renders a card with an image and content of a testimonial.
 * @param {string} image - path to the image source.
 * @param {string} imageAlt - alt text for the image.
 * @param {object} content - object with the testimonial data.
 */
export default function TestimonialCard({image, imageAlt, content}) {
    return (
        <div className={styles.wrapper}>
             <img
                src={image}
                alt={imageAlt || 'Picture illustrating the article'}
                className={styles.image}
            />            
            <Testimonial content={content} />
        </div>
    )
}