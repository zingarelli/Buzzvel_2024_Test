import styles from './Intro.module.css';
import intro from '../../../assets/intro.png';
import intro_lg from '../../../assets/intro_lg.png';
import Article from '../../Article';
import { desktopWidth } from '../../../constants';

/* Circle icons in the background */
function OrangeCircle({ className, size = 'normal' }) {
    switch (size) {
        case 'normal':
            return (
                <svg
                    width="95"
                    height="251"
                    viewBox="0 0 95 251"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={className}
                >
                    <ellipse cx="-30.7869" cy="125.108" rx="124.932" ry="125.108" fill="var(--orange-quaternary)" />
                </svg>
            );
        case 'lg':
            return (
                <svg
                    width="502"
                    height="711"
                    viewBox="0 0 502 711"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={className}
                >
                    <ellipse cx="147" cy="355.5" rx="355" ry="355.5" fill="var(--orange-quaternary)" />
                </svg>
            );
    }
}

function PurpleCircle({ className, size = 'normal' }) {
    switch (size) {
        case 'normal':
            return (
                <svg
                    width="39"
                    height="211"
                    viewBox="0 0 39 211"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={className}
                >
                    <ellipse cx="105.841" cy="105.955" rx="104.872" ry="105.048" fill="var(--purple-secondary)" />
                </svg>
            );
        case 'lg':
            return (
                <svg
                    width="558"
                    height="597"
                    viewBox="0 0 558 597"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={className}
                >
                    <ellipse cx="298" cy="298.5" rx="298" ry="298.5" fill="var(--purple-secondary)" />
                </svg>
            );
    }
}

export default function Intro() {
    return (
        <Article
            supTitle='No more waste'
            title='Pick the Sun'
            introduction='Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.'
            className={styles.article}
        >
            <picture>
                <source media={`(min-width: ${desktopWidth})`} srcSet={intro_lg} />
                <img
                    src={intro}
                    alt="placeholder for picture in the Intro section"
                    className={styles.image}
                />
            </picture>
            <OrangeCircle className={styles.circle__left} />
            <OrangeCircle className={styles['circle__left--lg']} size='lg' />
            <PurpleCircle className={styles.circle__right} />
            <PurpleCircle className={styles['circle__right--lg']} size='lg' />
        </Article>
    );
}