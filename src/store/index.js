// Redux
import { configureStore } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'

// Features
import { actions, reducer } from './features'

// Store
export default configureStore({ reducer })

// Selectors
const selectors = {
    Employees: () => useSelector((state) => state.employees),
}

// Actions, Selectors
export { actions, selectors }
