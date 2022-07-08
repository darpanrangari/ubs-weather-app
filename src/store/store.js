import { configureStore } from '@reduxjs/toolkit'
import searchSlice from './slice/searchSlice'

export const setupStore = configureStore({
    reducer: {
        search:searchSlice,
    },
})