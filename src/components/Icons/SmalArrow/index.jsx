/**
 * Display an arrow.
 * @param {string} direction - change the direction (right | left). Default is right.
 * @param {string} theme - change the color (purple | orange). Default is orange.
 */
export default function SmalArrow({ direction = 'right', theme = 'orange' }) {
    const color = theme === 'orange' ? 'var(--orange-secondary)' : 'var(--purple-primary)';
    switch (direction) {
        case 'right':
            return (
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 7.42871H14H1.5ZM14 7.42871L8 1.42871L14 7.42871ZM14 7.42871L8 13.4287L14 7.42871Z" fill={color} />
                    <path d="M1.5 7.42871H14M14 7.42871L8 1.42871M14 7.42871L8 13.4287" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        case 'left':
            return (
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 7.42871H1.5H14ZM1.5 7.42871L7.5 1.42871L1.5 7.42871ZM1.5 7.42871L7.5 13.4287L1.5 7.42871Z" fill={color} />
                    <path d="M14 7.42871H1.5M1.5 7.42871L7.5 1.42871M1.5 7.42871L7.5 13.4287" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
    }
}