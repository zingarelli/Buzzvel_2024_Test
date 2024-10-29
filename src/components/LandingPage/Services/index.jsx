import styles from './Services.module.css';
import services from '../../../assets/services.png';
import Article from '../../Article';
import InfoCard from '../../InfoCard';

export default function Services() {
    return (
        <Article
            supTitle='Services'
            title='Personalized services'
            introduction='Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed.'
        >
            <div className={styles.cards}>
                <InfoCard
                    image='https://placehold.co/64/white/white/png'
                    imageAlt='placeholder for an image'
                    title='Et mauris'
                >
                    Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique.
                </InfoCard>
                <InfoCard
                    image='https://placehold.co/64/white/white/png'
                    imageAlt='placeholder for an image'
                    title='Eget sit'
                >
                    Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.
                </InfoCard>
                <InfoCard
                    image='https://placehold.co/64/white/white/png'
                    imageAlt='placeholder for an image'
                    title='Imperdiet pellentesque'
                >
                    Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim viverra parturient tristique nulla.
                </InfoCard>
                <InfoCard
                    image='https://placehold.co/64/white/white/png'
                    imageAlt='placeholder for an image'
                    title='Non libero'
                >
                    Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus ut sed eros, consectetur viverra.
                </InfoCard>
            </div>
            <div className={styles.imageWrapper}>
                <img
                    src={services}
                    alt="placeholder for picture in the Services section"
                    className={styles.image}
                />
            </div>
        </Article>
    );
}