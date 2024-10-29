import styles from "./Testimonials.module.css";
import { testimonials } from "../../../mock/testimonials";
import Article from "../../Article";
import QuoteButton from "../../QuoteButton";
import TestimonialCard from "../../TestimonialCard";
import SmalArrow from "../../Icons/SmalArrow";

export default function Testimonials() {
    return (
        <Article
            title='Make something awesome'
            supTitle='Join other Sun harvesters'
            introduction='Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique condimentum congue fusce nunc, donec magnis commodo.'
            theme='secondary'
            className={styles.article}
        >
            <div className={styles.quoteButton}>
                <QuoteButton theme='orange' />
            </div>
            {/* TODO: slider with all testimonials */}
            <div className={styles.carousel}>
                <TestimonialCard
                    image='https://placehold.co/64/white/white/png'
                    imageAlt='placeholder for an image'
                    content={testimonials[0]}
                />
                <div className={styles.carousel__nav}>
                    <button className={styles.carousel__button}>
                        <SmalArrow direction='left' />
                    </button>
                    <button className={styles.carousel__button}>
                        <SmalArrow />
                    </button>
                </div>
            </div>
            {/* TODO: workaround while the slider is not implemented */}
            <div className={styles['carousel--lg']}>
                <div className={styles.carousel__list}>
                    {testimonials.map(item => <TestimonialCard
                        image='https://placehold.co/64/white/white/png'
                        imageAlt='placeholder for an image'
                        content={item}
                        key={item.id}
                    />)}
                </div>
                <div className={styles.carousel__nav}>
                    <button className={styles.carousel__button}>
                        <SmalArrow direction='left' />
                    </button>
                    <button className={styles.carousel__button}>
                        <SmalArrow />
                    </button>
                </div>
            </div>
        </Article>
    )
}