import styles from "./CTA.module.css";
import { testimonials } from "../../../mock/testimonials";
import Article from "../../Article";
import QuoteButton from "../../QuoteButton";
import TestimonialCard from "../../TestimonialCard";
import SmalArrow from "../../Icons/SmalArrow";

export default function CTA() {
    return (
        <Article
            title='Make something awesome'
            supTitle='Join other Sun harvesters'
            introduction='Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique condimentum congue fusce nunc, donec magnis commodo.'
            theme='secondary'
        >
            <div className={styles.quoteButton}>
                <QuoteButton theme='orange' />
            </div>
            {/* TODO: slider with all testimonials */}
            <div className={styles.carousel}>
                <TestimonialCard
                    image='https://placehold.co/64/white/white/png'
                    imageAlt='placeholder for an image'
                    content={testimonials[1]}
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
        </Article>
    )
}