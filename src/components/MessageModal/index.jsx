// Components
import ModalWrapper from '../ModalWrapper'

// Styles
import styles from './styles/styles.module.css'

/** A message modal component for displaying a message with an "OK" button.
 * @param {object} props - The component's props.
 * @param {string} props.message - The message to display in the modal.
 * @param {function} props.onButtonClick - The function to be called when the "OK" button is clicked.
 * @param {boolean} [props.visible] - Controls the visibility of the message modal.
 * @returns {JSX.Element | null} The message modal component or null if not visible.
 */
export default function MessageModal({
    message,
    onButtonClick,
    visible = false,
}) {
    return (
        <ModalWrapper visible={visible} dimmed>
            <div className={styles.wrapper}>
                <span>{message}</span>
                <button onClick={onButtonClick}>OK</button>
            </div>
        </ModalWrapper>
    )
}
