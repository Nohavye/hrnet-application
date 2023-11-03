// Styles
import styles from './styles/styles.module.css'

// ModalWrapper component
export default function ModalWrapper({
    children,
    visible = false,
    dimmed = false,
}) {
    return (
        visible && (
            <div
                className={`${styles.wrapper}${
                    dimmed ? ` ${styles.dimmed}` : ''
                }`}
            >
                {children}
            </div>
        )
    )
}
