import styles from './Footer.module.css';
import Logo from '../../Logo';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.copyright}>
                <Logo displayImage />
                <p>@ 2023 Soller, Inc. All rights reserved.</p>
            </div>
            <nav>
                <ul className={styles.links}>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Support</a></li>
                </ul>
            </nav>
        </footer>
    );
}