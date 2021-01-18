import React from 'react';
import LoginPage from './login';
import { render , fireEvent} from '@testing-library/react';
import {CounterState, selectAuth} from './loginSlice';
import { Provider, useSelector, useDispatch } from 'react-redux'
import configureStore from 'redux-mock-store';
import * as reactRedux from 'react-redux';

describe('<LoginPage />', () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')

    const initialState = {
        email:'docs2gtvt@gmail.com'
    } as CounterState;
    const mockStore = configureStore();
   
    useSelectorMock.mockReturnValue({
        email:''
    })

    it('test render with input value is dotesing',()=>{
        const store = mockStore(initialState)
        const wrapper = render(<Provider store={store}><LoginPage /></Provider>)
        const {baseElement} = wrapper
        const inputs = baseElement.querySelector('input') as Element;
        fireEvent.change(inputs, {
            target: { value: 'dotesing' },
        });
        expect(wrapper).toMatchSnapshot();
    })

    it('test render with input value is dotesing@gmail.con and default value selector is empty',()=>{
        useSelectorMock.mockClear()
        const store = mockStore(initialState)
        const wrapper = render(<Provider store={store}><LoginPage /></Provider>)
        const {baseElement, getByText} = wrapper
        const dispatchMock = jest.fn();
        dispatchMock.mockImplementation(action => store.dispatch(action));
        
        const inputs = baseElement.querySelector('input') as Element;
        fireEvent.change(inputs, {
            target: { value: 'dotesing@gmail.com' },
        });
        fireEvent.click(getByText('Sumbit'));
        expect(wrapper).toMatchSnapshot();
    })

    it('should render button', () => {
        const store = mockStore(initialState)
        const wrapper = render(<Provider store={store}><LoginPage /></Provider>)
        expect(wrapper).toMatchSnapshot();
    });

    it('test render after click reset',()=>{
        const store = mockStore(initialState)
        const wrapper = render(<Provider store={store}><LoginPage /></Provider>)
        const {baseElement, getByText} = wrapper
        const dispatchMock = jest.fn();
        dispatchMock.mockImplementation(action => store.dispatch(action));
        
        const inputs = baseElement.querySelector('input') as Element;
        fireEvent.change(inputs, {
            target: { value: 'dotesing1212@gmail.com' },
        });
        fireEvent.click(getByText('Reset'));
        expect(wrapper).toMatchSnapshot();
    })
});

  
