import styles from './Features.module.css';
import features from '../../../assets/features.png';
import Article from '../../Article';
import InfoCard from '../../InfoCard';

export default function Features() {
    return (
        <Article
            supTitle='System features'
            title='Powerful features'
            introduction='Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed.'
        >
            <div className={styles.cards}>
                <InfoCard
                    image='https://placehold.co/64/white/white/png'
                    imageAlt='placeholder for an image'
                    title='Erat sit'
                >
                    Id quis lectus pharetra, ultricies integer montes, amet, gravida consectetur. Nunc convallis fringilla nisl magna sagittis.
                </InfoCard>
                <InfoCard
                    image='https://placehold.co/64/white/white/png'
                    imageAlt='placeholder for an image'
                    title='Ullamcorper arcu'
                >
                    Ipsum at id hendrerit amet faucibus commodo quam nullam. Lectus auctor habitant duis dictum.
                </InfoCard>
                <InfoCard
                    image='https://placehold.co/64/white/white/png'
                    imageAlt='placeholder for an image'
                    title='Et pellentesque'
                >
                    Mi vitae, massa eu molestie massa euismod volutpat condimentum. Blandit molestie ullamcorper hendrerit purus lorem vulputate.
                </InfoCard>
                <InfoCard
                    image='https://placehold.co/64/white/white/png'
                    imageAlt='placeholder for an image'
                    title='Amet egestas'
                >
                    Elementum, libero, lacus, vel ullamcorper at velit id. Malesuada velit et, ullamcorper malesuada amet, felis. 
                </InfoCard>
            </div>
            <div className={styles.imageWrapper}>
                <img
                    src={features}
                    alt="placeholder for picture in the Features section"
                    className={styles.image}
                />
            </div>
        </Article>
    );
}