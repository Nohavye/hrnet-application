// Components
import { DropdownSelector } from '@hrnet-org/hrnet-component-library'

// Styles
import styles from './styles/styles.module.css'

// DropdownInput component
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
