// Components
import ModalWrapper from '../ModalWrapper'

// Styles
import styles from './styles/styles.module.css'

// MessageModal component
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
