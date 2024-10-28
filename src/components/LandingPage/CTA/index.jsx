import styles from './CTA.module.css';
import Article from '../../Article';
import QuoteButton from '../../QuoteButton';
import laptop from '../../../assets/laptop.png';

/* Circle icons in the background */
function CircleMobile ({ className }) {
    return (
        <svg
            width="191"
            height="181"
            viewBox="0 0 191 181"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <ellipse cx="8" cy="182.499" rx="183" ry="182.5" fill="#A855F7" />
        </svg>
    );
}

export default function CTA() {
    return (
        <Article
            title='All the power that you need for your house is now available'
            supTitle='Get the Sun to power your home'
            theme='secondary'
            className={styles.article}
        >
            <div className={styles.content}>
                <QuoteButton theme='orange' />
                <p>Egestas fringilla aliquam leo</p>
            </div>
            <img src={laptop} alt="a laptop" className={styles.image} />
            <CircleMobile className={styles.circle} />
        </Article>
    )
}