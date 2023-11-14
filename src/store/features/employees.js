// Redux
import { createSlice } from '@reduxjs/toolkit'

// Mock employees
// import mockEmployees from '../../global/constants/mock_employees.json'
// import { Employee } from '../../global/models'
// const initialState = mockEmployees.map((employee) => Employee(employee))

// Slice
export const { actions, reducer } = createSlice({
    name: 'employees',
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push(action.payload)
        },
    },
})
