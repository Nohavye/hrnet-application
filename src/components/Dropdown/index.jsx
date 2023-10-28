// Styles
import styles from './styles.module.css'

// Components
import { DropdownSelector } from '@hrnet-org/hrnet-component-library'

export default function Component({ id, label, items, placeholder }) {
    return (
        <div className={styles.wrapper}>
            {label && <label htmlFor={id}>{label}</label>}
            <DropdownSelector
                classNames={{ wrapper: styles.dropdownWrapper }}
                id={id}
                items={items}
                placeholder={placeholder}
            />
        </div>
    )
}
