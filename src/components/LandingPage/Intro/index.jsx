import styles from './Intro.module.css';
import intro from '../../../assets/intro.png';
import Article from '../../Article';

/* Circle icons in the background */
function OrangeCircle({ className }) {
    return (
        <svg
            width="95"
            height="251"
            viewBox="0 0 95 251"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <ellipse cx="-30.7869" cy="125.108" rx="124.932" ry="125.108" fill="var(--orange-quaternary" />
        </svg>
    );
}

function PurpleCircle({ className }) {
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
}

export default function Intro() {
    return (
        <Article
            supTitle='No more waste'
            title='Pick the Sun'
            introduction='Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.'
            className={styles.article}
        >
            <img
                src={intro}
                alt="placeholder for picture in the Intro section"
                className={styles.image}
            />
            <OrangeCircle className={styles.circle__left} />
            <PurpleCircle className={styles.circle__right} />
        </Article>
    );
}