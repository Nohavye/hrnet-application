// Redux
import { createSlice } from '@reduxjs/toolkit'

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
