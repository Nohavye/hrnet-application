// React
import { useState } from 'react'

// Redux
import { useDispatch } from 'react-redux'
import { actions } from '../../store'

// Globals
import { STATES, DEPARTMENT } from '../../global/constants'

// Utils
import { employeeFromForm } from './utils'

// Components
import TextInput from '../TextInput'
import DropdownInput from '../DropdownInput'
import DatePickerInput from '../DatePickerInput'
import MessageModal from '../MessageModal'

// Styles
import styles from './styles/styles.module.css'

/** The CreationForm component for creating new employee records.
 * @returns {JSX.Element} The CreationForm component.
 */
export default function CreationForm() {
    // Local State
    const [modaleVisibility, setModalVisibility] = useState(false)

    // Redux
    const dispatch = useDispatch()

    /** Handles saving a new employee record.
     * @param {Event} e - The form submission event.
     */
    const handleSaveEmployee = (e) => {
        e.preventDefault()
        dispatch(actions.employees.add(employeeFromForm()))
        setModalVisibility(true)
    }

    return (
        <>
            <form className={styles.form}>
                <h2>Create employee</h2>
                <div className={styles.parentFieldWrapper}>
                    <div className={styles.childFieldWrapper}>
                        <TextInput
                            id="first-name"
                            label="First Name"
                            placeholder="Type the first name"
                        />
                        <TextInput
                            id="last-name"
                            label="Last Name"
                            placeholder="Type the last name"
                        />
                        <DatePickerInput
                            id="date-of-birth"
                            label="Date Of Birth"
                        />
                        <DatePickerInput id="start-date" label="Start Date" />
                    </div>
                    <fieldset className={styles.fieldSet}>
                        <legend>Address</legend>
                        <div className={styles.childFieldWrapper}>
                            <TextInput
                                id="street"
                                label="Street"
                                placeholder="Type the street name"
                            />
                            <TextInput
                                id="city"
                                label="City"
                                placeholder="Type the city name"
                            />
                            <DropdownInput
                                id="state"
                                label="State"
                                items={Array.from(STATES.keys())}
                                placeholder="Click to select a state"
                            />
                            <TextInput
                                id="zip-code"
                                label="Zip code"
                                placeholder="Type the zip code"
                            />
                        </div>
                    </fieldset>
                </div>
                <DropdownInput
                    id="department"
                    label="Department"
                    items={DEPARTMENT}
                    placeholder="Click to select a department"
                />
                <button
                    className={styles.submitButton}
                    onClick={handleSaveEmployee}
                >
                    Save
                </button>
            </form>
            <MessageModal
                message={'Employee Created !'}
                onButtonClick={() => setModalVisibility(false)}
                visible={modaleVisibility}
            />
        </>
    )
}
