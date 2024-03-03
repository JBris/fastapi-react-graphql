import { configureStore } from '@reduxjs/toolkit'
import relationshipReducer from '../features/variables/relationshipSlice';
import paginationReducer from '../features/pagination/paginationSlice';

export const store = configureStore({
    reducer: {
        relationship: relationshipReducer,
        pagination: paginationReducer
    },
})