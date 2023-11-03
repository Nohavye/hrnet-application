// React
import { useState } from 'react'

// Components
import DatePicker from 'react-datepicker'

// Styles
import 'react-datepicker/dist/react-datepicker.css'
import styles from './styles/styles.module.css'

// DatePickerInput component
export default function DatePickerInput({
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
