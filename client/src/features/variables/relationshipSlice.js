import { createSlice } from '@reduxjs/toolkit'

export const relationshipSlice = createSlice({
    name: 'relationship',
    initialState: {
        x: "",
        y: ""
    },
    reducers: {
        setX: (state, action) => {
            state.x = action.payload;
        },
        setY: (state, action) => {
            state.y = action.payload;
        },
    },
})

export const { setX, setY } = relationshipSlice.actions

export default relationshipSlice.reducer