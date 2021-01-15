import React from 'react';
import LoginPage from './login';
import { render , fireEvent} from '@testing-library/react';
import {CounterState, selectAuth} from './loginSlice';
import { Provider, useSelector } from 'react-redux'
import configureStore from 'redux-mock-store';
import * as reactRedux from 'react-redux';

describe('<LoginPage />', () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
    const initialState = {
        email:'docs2gtvt@gmail.com'
    } as CounterState;
    const mockStore = configureStore();
    beforeEach(() => {
        useSelectorMock.mockClear()
    })
    it('should render button', () => {
        const store = mockStore(initialState)
        useSelectorMock.mockReturnValue({
            email:'asdasd'
        })
        const wrapper = render(<Provider store={store}><LoginPage /></Provider>)
        expect(wrapper).toMatchSnapshot();
    });

    it('test render with input value is dotesing',()=>{
        const store = mockStore(initialState)
        useSelectorMock.mockReturnValue({
            email:'asdasd'
        })
        const wrapper = render(<Provider store={store}><LoginPage /></Provider>)
        const {baseElement} = wrapper
        const inputs = baseElement.querySelector('input') as Element;
        fireEvent.change(inputs, {
            target: { value: 'dotesing' },
        });
        expect(wrapper).toMatchSnapshot();
    })
});

  
