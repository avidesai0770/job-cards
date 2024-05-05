import {configureStore} from '@reduxjs/toolkit'
import jobDataSlice from '../features/jobData/jobDataSlice'

export const Store = configureStore({
    reducer:{
        jobs: jobDataSlice,
    },
})