import React, { useEffect, useRef, useState } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import {selectAuth, login} from './loginSlice';
import {LoginContainer} from './loginContainer';

export interface IInputForm{
    email:string,
}

function LoginComponent(){
    const dispatch = useDispatch();
    const { email } = useSelector(selectAuth);

    const [inputValue, setInputValue]= useState({} as IInputForm);
    const [isReset, setReset]= useState(false);
    const preEmail = useRef(inputValue.email);

    const handleChangeTextInput=(e: any)=>{
        setInputValue({
            [e.target.name]: e.target.value
        } as Pick<IInputForm , keyof IInputForm>)
    }  
    
    useEffect(()=>{
        preEmail.current= inputValue.email
    },[inputValue.email])

    const handleSubmit =()=>{
        dispatch(login({email: inputValue.email}))
    }

    const handleReset =()=>{
        const loginContainer = new LoginContainer();
        setInputValue({email: loginContainer.resetEmail()})
        dispatch(login({email: loginContainer.resetEmail()}))
        setReset(true)
    }

    return (
        <div className="login__container">
            <p className="login__title">Login page</p>
            <div className="login__content">
                <input placeholder='Enter email...' onChange={handleChangeTextInput} type="text" name="email" id="" value={inputValue.email || ''}/>
                <button onClick={handleSubmit}>Sumbit</button>
            </div>

            <div className="login__result">
                <p className="">This is email : </p>
                <p>{email || ''}</p>
            </div>

            <div className="login__result login__content">
                <p className="">This is old email : {isReset ? preEmail.current : ''}</p>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    )

}
export default LoginComponent;