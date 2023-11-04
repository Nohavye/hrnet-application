// Styles
import styles from './styles/styles.module.css'

/** A modal wrapper component for displaying modal content.
 * @param {object} props - The component's props.
 * @param {boolean} [props.visible] - Controls the visibility of the modal wrapper.
 * @param {boolean} [props.dimmed] - Adds a dimming effect to the modal wrapper.
 * @param {ReactNode} props.children - The content to be displayed inside the modal wrapper.
 * @returns {JSX.Element | null} The modal wrapper component or null if not visible.
 */
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
