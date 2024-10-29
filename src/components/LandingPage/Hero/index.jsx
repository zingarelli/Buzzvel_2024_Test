import styles from './Hero.module.css';
import worker from '../../../assets/worker.png';
import worker_lg from '../../../assets/worker_lg.png';
import { testimonials } from '../../../mock/testimonials';
import Logo from "../../Logo";
import QuoteButton from '../../QuoteButton';
import Testimonial from '../../Testimonial';
import MenuButton from '../../MenuButton';

/**
 * Renders the Hero section of the landing page.
 */
export default function Hero() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Logo />
                <MenuButton className={styles.nav__button} />
                <picture className={styles.nav__bg}>
                    <source media="(max-width: 600px)" srcSet={worker} />
                    <img src={worker_lg} alt="a worker installing solar panels" />
                </picture>
            </nav>
            <div className={styles.content}>
                <section className={styles.main}>
                    <h1 className={styles.title}>Get the Sun to Power Your Home</h1>
                    <p className={styles.text}>Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque.</p>
                    <QuoteButton />
                </section>
                <Testimonial content={testimonials[0]} highlight />
            </div>
        </header>
    );
}