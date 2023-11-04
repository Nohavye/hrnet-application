// Styles
import styles from './styles/styles.module.css'

/** A text input component for entering text.
 * @param {object} props - The component's props.
 * @param {string} props.id - The unique identifier for the input element.
 * @param {string} [props.label] - The label to display above the input.
 * @param {string} [props.placeholder] - The placeholder text for the input.
 * @returns {JSX.Element} The text input component.
 */
export default function TextInput({ id, label, placeholder = 'Type text' }) {
    return (
        <div className={styles.wrapper}>
            {label && <label htmlFor={id}>{label}</label>}
            <input type="text" id={id} placeholder={placeholder} />
        </div>
    )
}
