import styles from './styles.module.css'

export default function Component({
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
