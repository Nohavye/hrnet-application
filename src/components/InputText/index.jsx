// Styles
import styles from './styles.module.css'

export default function Component({ id, label, placeholder = 'Type text' }) {
    return (
        <div className={styles.wrapper}>
            {label && <label htmlFor={id}>{label}</label>}
            <input type="text" id={id} placeholder={placeholder} />
        </div>
    )
}
