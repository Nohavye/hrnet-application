import { configureStore } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'

// Reducers
import { reducer as employeesReducer } from '../features/employees'

export default configureStore({
    reducer: {
        employees: employeesReducer,
    },
})

export const selectors = {
    Employees: () => useSelector((state) => state.employees),
}
