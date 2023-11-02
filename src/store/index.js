// Redux
import { configureStore } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'

// Features
import { actions, reducers } from './features'

// Store
export default configureStore({
    reducer: {
        employees: reducers.employees,
    },
})

// Selectors
const selectors = {
    Employees: () => useSelector((state) => state.employees),
}

// Actions, Selectors
export { actions, selectors }
