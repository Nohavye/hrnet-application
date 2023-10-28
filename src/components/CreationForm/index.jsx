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

// Constants
import { STATES, DEPARTMENT } from '../../global/constants'

// Component
export default function Component() {
    const dispatch = useDispatch()

    const handleSave = (e) => {
        e.preventDefault()

        const getInput = (id) => {
            return document.getElementById(id)
        }

        const employee = Employee({
            firstName: getInput('first-name').value,
            lastName: getInput('last-name').value,
            startDate: getInput('start-date').value,
            department: getInput('department').value,
            dateofBirth: getInput('date-of-birth').value,
            street: getInput('street').value,
            city: getInput('city').value,
            state: getInput('state').value,
            zipCode: getInput('zip-code').value,
        })

        dispatch(employeesActions.add(employee))
    }

    return (
        <form className={styles.form}>
            <h3>Create employee</h3>
            <div className={styles.fieldWrapper}>
                <div className={styles.division}>
                    <InputText id="first-name" label="First Name" />
                    <InputText id="last-name" label="Last Name" />
                    <InputText id="date-of-birth" label="Date Of Birth" />
                    <InputText id="start-date" label="Start Date" />
                </div>
                <div className={styles.division}>
                    <fieldset className={styles.group}>
                        <legend>Address</legend>
                        <InputText id="street" label="Street" />
                        <InputText id="city" label="City" />
                        <Dropdown
                            id="state"
                            label="State"
                            items={STATES}
                            placeholder="Select state"
                        />
                        <InputText id="zip-code" label="Zip code" />
                    </fieldset>
                </div>
            </div>
            <Dropdown
                id="department"
                label="Department"
                items={DEPARTMENT}
                placeholder="Select department"
            />
            <button onClick={handleSave}>Save</button>
        </form>
    )
}
