import React, { ReactElement, useState } from 'react';
// import './login.scss';
import {useDispatch, useSelector } from 'react-redux';
import {selectAuth, login} from './loginSlice';

export interface IInputForm{
    email:string,
}

function Login():ReactElement{
    // const dispatch = useDispatch();
    // const { email } = useSelector(selectAuth);

    const [inputValue, setInputValue]= useState({} as IInputForm);

    const handleChangeTextInput=(e: any)=>{
        setInputValue({
            [e.target.name]: e.target.value
        } as Pick<IInputForm , keyof IInputForm>)
    }   

    const handleSubmit =()=>{
        // dispatch(login({email: inputValue.email}))
    }

    return (
        <div className="login__container">
            <p className="login__title">Login page</p>
            <div className="login__content">
                <input placeholder='Enter email...' onChange={handleChangeTextInput} type="text" name="email" id="" value={inputValue.email}/>
                <button onClick={handleSubmit}>Sumbit</button>
            </div>

            <div className="login__result">
                <p className="">This is email : </p>
                <p>{inputValue.email}</p>
            </div>
        </div>
    )

}
export default Login;