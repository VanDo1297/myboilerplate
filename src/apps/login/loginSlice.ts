import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../reducer';

// Types
type CounterState = {
    email: string,
    error:string,
    loading: boolean
}

const initialState1: CounterState = {
    email: '',
    error:'',
    loading: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState1,
    reducers: {
        login: (state, action) => {
            console.log(action);
            state.email = action.payload.email
        },
        logout: (state, action) => {
            state.email= ''
        },
    },
})

// Slice action creators
export const { login, logout } = authSlice.actions

export const selectAuth = (state: RootState) => state.auth
// export const selectAuth = (state: RootState) => state.auth

export const authReducer =  authSlice.reducer