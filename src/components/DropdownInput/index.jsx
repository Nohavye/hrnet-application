// Components
import { DropdownSelector } from '@hrnet-org/hrnet-component-library'

// Styles
import styles from './styles/styles.module.css'

/** A dropdown input component for selecting items from a list.
 *
 * @param {object} props - The component's props.
 * @param {string} props.id - The unique identifier for the input element.
 * @param {string} [props.label] - The label to display above the input.
 * @param {Array<string>} props.items - The list of items to select from.
 * @param {string} props.placeholder - The placeholder text for the input.
 * @returns {JSX.Element} The dropdown input component.
 */
export default function DropdownInput({ id, label, items, placeholder }) {
    return (
        <div className={styles.wrapper}>
            {label && <label htmlFor={id}>{label}</label>}
            <DropdownSelector
                classNames={{
                    wrapper: styles.dropdownWrapper,
                    input: styles.dropdownInput,
                    items_wrapper: styles.dropdownItemsWrapper,
                    item: styles.dropdownItem,
                }}
                id={id}
                items={items}
                maxHeight={400}
                placeholder={placeholder}
            />
        </div>
    )
}
