// Styles
import styles from './styles.module.css'

// Redux
import { useDispatch } from 'react-redux'
import { actions as employeesActions } from '../../features/employees'

// Entities
import { Employee } from '../../entities'

// Components
import InputText from '../InputText'
import Dropdown from '../Dropdown'
import DatePicker from '../DatePicker'
import MessageModal from '../MessageModal'

// Constants
import { STATES, DEPARTMENT } from '../../global/constants'
import { useState } from 'react'

// Component
export default function Component() {
    const dispatch = useDispatch()
    const [messageIsVisible, setMessageIsVisible] = useState(false)

    const handleSave = (e) => {
        e.preventDefault()

        const getInput = (id) => document.getElementById(id)

        const employee = Employee({
            firstName: getInput('first-name').value,
            lastName: getInput('last-name').value,
            startDate: getInput('start-date').value,
            department: getInput('department').value,
            dateofBirth: getInput('date-of-birth').value,
            street: getInput('street').value,
            city: getInput('city').value,
            state: STATES.get(getInput('state').value),
            zipCode: getInput('zip-code').value,
        })

        dispatch(employeesActions.add(employee))
        setMessageIsVisible(true)
    }

    return (
        <>
            <form className={styles.form}>
                <h3>Create employee</h3>
                <div className={styles.fieldWrapper}>
                    <div className={styles.division}>
                        <InputText
                            id="first-name"
                            label="First Name"
                            placeholder="Type the first name"
                        />
                        <InputText
                            id="last-name"
                            label="Last Name"
                            placeholder="Type the last name"
                        />
                        <DatePicker id="date-of-birth" label="Date Of Birth" />
                        <DatePicker id="start-date" label="Start Date" />
                    </div>
                    <div className={styles.division}>
                        <fieldset className={styles.group}>
                            <legend>Address</legend>
                            <InputText
                                id="street"
                                label="Street"
                                placeholder="Type the street name"
                            />
                            <InputText
                                id="city"
                                label="City"
                                placeholder="Type the city name"
                            />
                            <Dropdown
                                id="state"
                                label="State"
                                items={Array.from(STATES.keys())}
                                placeholder="Click to select a state"
                            />
                            <InputText
                                id="zip-code"
                                label="Zip code"
                                placeholder="Type the zip code"
                            />
                        </fieldset>
                    </div>
                </div>
                <Dropdown
                    id="department"
                    label="Department"
                    items={DEPARTMENT}
                    placeholder="Click to select a department"
                />
                <button className={styles.submitButton} onClick={handleSave}>
                    Save
                </button>
            </form>
            <MessageModal
                message={'Employee Created !'}
                onButtonClick={() => setMessageIsVisible(false)}
                visible={messageIsVisible}
            />
        </>
    )
}
