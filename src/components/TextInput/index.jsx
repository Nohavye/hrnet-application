// Styles
import styles from './styles/styles.module.css'

// TextInput component
export default function TextInput({ id, label, placeholder = 'Type text' }) {
    return (
        <div className={styles.wrapper}>
            {label && <label htmlFor={id}>{label}</label>}
            <input type="text" id={id} placeholder={placeholder} />
        </div>
    )
}
