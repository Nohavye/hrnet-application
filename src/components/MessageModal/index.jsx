// Styles
import styles from './styles.module.css'

// Components
import ModalWrapper from '../ModalWrapper'

export default function Component({ message, onButtonClick, visible = false }) {
    return (
        <ModalWrapper visible={visible} dimmed>
            <div className={styles.wrapper}>
                <span>{message}</span>
                <button onClick={onButtonClick}>OK</button>
            </div>
        </ModalWrapper>
    )
}
