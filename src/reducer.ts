import { combineReducers } from '@reduxjs/toolkit'

// Reducers
import authReducer from './apps/login/loginSlice';

const rootReducer = combineReducers({
    auth: authReducer,
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>