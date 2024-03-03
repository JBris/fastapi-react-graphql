import { createSlice } from '@reduxjs/toolkit'

export const paginationSlice = createSlice({
    name: 'pagination',
    initialState: {
        offset: 0,
        limit: 250
    },
    reducers: {
        setOffset: (state, action) => {
            state.offset = action.payload;
        },
        setLimit: (state, action) => {
            state.limit = parseInt(action.payload);
        },
    },
})

export const { setOffset, setLimit } = paginationSlice.actions

export default paginationSlice.reducer