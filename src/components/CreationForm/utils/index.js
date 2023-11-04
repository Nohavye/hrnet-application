// Models
import { Employee } from '../../../global/models'

// Constants
import { STATES } from '../../../global/constants'

export function employeeFromForm() {
    const getInputValue = (id) => document.getElementById(id).value

    return Employee({
        firstName: getInputValue('first-name'),
        lastName: getInputValue('last-name'),
        startDate: getInputValue('start-date'),
        department: getInputValue('department'),
        dateofBirth: getInputValue('date-of-birth'),
        street: getInputValue('street'),
        city: getInputValue('city'),
        state: STATES.get(getInputValue('state')),
        zipCode: getInputValue('zip-code'),
    })
}
