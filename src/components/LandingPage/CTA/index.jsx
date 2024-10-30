import styles from './CTA.module.css';
import Article from '../../Article';
import QuoteButton from '../../QuoteButton';
import laptop from '../../../assets/laptop.png';
import laptop_lg from '../../../assets/laptop_lg.png';
import { desktopWidth } from '../../../constants';

/* Circle icons in the background */
function Circle({ className, size = 'normal' }) {
    switch (size) {
        case 'normal':
            return (
                <svg
                    width="191"
                    height="181"
                    viewBox="0 0 191 181"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={className}
                >
                    <ellipse cx="8" cy="182.499" rx="183" ry="182.5" fill="var(--purple-quaternary)" />
                </svg>
            );
        case 'lg':
            return (
                <svg
                    width="706"
                    height="438"
                    viewBox="0 0 706 438"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={className}
                >
                    <ellipse cx="391" cy="48" rx="391" ry="390" fill="var(--purple-tertiary)" />
                </svg>
            )
    }
}

export default function CTA() {
    return (
        <Article
            title='All the power that you need for your house is now available'
            supTitle='Get the Sun to power your home'
            theme='secondary'
            className={styles.article}
        >
            <div className={styles.quote}>
                <QuoteButton theme='orange' />
                <p>Egestas fringilla aliquam leo</p>
            </div>
            <picture className={styles.picture}>
                <source media={`(min-width: ${desktopWidth})`} srcSet={laptop_lg} />
                <img
                    src={laptop}
                    alt="a laptop"
                    className={styles.image}
                />
            </picture>
            <Circle className={styles.circle} />
            <Circle className={styles['circle--lg']} size='lg' />
        </Article>
    )
}