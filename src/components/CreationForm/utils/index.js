// Models
import { Employee } from '../../../global/models'

// Constants
import { STATES } from '../../../global/constants'

export function getFormData() {
    const getInput = (id) => document.getElementById(id)

    return Employee({
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
}
