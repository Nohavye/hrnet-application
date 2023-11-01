// Styles
import { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'

// Components
import DatePicker from 'react-datepicker'
import styles from './styles.module.css'

export default function Component({
    id,
    label,
    placeholder = 'Click to select a date',
}) {
    const [startDate, setStartDate] = useState(null)

    const MyContainer = ({ className, children }) => {
        return (
            <div className={`${className} ${styles.datePicker}`}>
                <div style={{ position: 'relative' }}>{children}</div>
            </div>
        )
    }

    return (
        <div className={styles.wrapper}>
            {label && <label htmlFor={id}>{label}</label>}
            <DatePicker
                id={id}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                calendarContainer={MyContainer}
                popperPlacement="auto"
                showYearDropdown
                scrollableYearDropdown
                yearDropdownItemNumber={100}
                placeholderText={placeholder}
            />
        </div>
    )
}
