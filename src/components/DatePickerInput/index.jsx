// React
import { useState } from 'react'

// Components
import DatePicker from 'react-datepicker'

// Styles
import 'react-datepicker/dist/react-datepicker.css'
import styles from './styles/styles.module.css'

/** A date picker input component for selecting dates.
 *
 * @param {object} props - The component's props.
 * @param {string} props.id - The unique identifier for the input element.
 * @param {string} [props.label] - The label to display above the input.
 * @param {string} [props.placeholder] - The placeholder text for the input.
 * @returns {JSX.Element} The date picker input component.
 */
export default function DatePickerInput({
    id,
    label,
    placeholder = 'Click to select a date',
}) {
    const [startDate, setStartDate] = useState(null)

    const calendarContainer = ({ className, children }) => {
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
                calendarContainer={calendarContainer}
                popperPlacement="auto"
                showYearDropdown
                scrollableYearDropdown
                yearDropdownItemNumber={100}
                placeholderText={placeholder}
            />
        </div>
    )
}
