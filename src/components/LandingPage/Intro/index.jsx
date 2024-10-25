import styles from './Intro.module.css';
import intro from '../../../assets/intro.png';
import orangeCircle from '../../../assets/orange-circle.png';
import purpleCircle from '../../../assets/purple-circle.png';
import Article from '../../Article';

export default function Intro() {
    return (
        <div className={styles.wrapper}>
            <img src={orangeCircle} alt="an orange circle" className={styles.circle__left} />
            <img src={purpleCircle} alt="an purple circle" className={styles.circle__right} />
            <Article
                supTitle='No more waste'
                title='Pick the Sun'
                introduction='Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.'
            >
                <img src={intro} alt="placeholder for picture in the Intro section" className={styles.image} />
            </Article>
        </div>
    );
}