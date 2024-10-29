import styles from './Hero.module.css';
import { testimonials } from '../../../mock/testimonials';
import QuoteButton from '../../QuoteButton';
import Testimonial from '../../Testimonial';

/**
 * Renders the Hero section of the landing page.
 */
export default function Hero() {
    return (
        <main className={styles.content}>
            <section className={styles.main}>
                <h1 className={styles.title}>Get the Sun to Power Your Home</h1>
                <p className={styles.text}>Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque.</p>
                <QuoteButton />
            </section>
            <Testimonial content={testimonials[0]} highlight />
        </main>
    );
}