import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import { render,RenderResult, fireEvent } from '@testing-library/react';
import LoginPage from './login';
import {Provider} from 'react-redux';
import {store} from '../../index';
import renderer from 'react-test-renderer';
describe('<LoginPage />', () => {
    let container: HTMLDivElement;

    it('should render snapshot', () => {
        // const inputs = container.querySelectorAll('input');
        // expect(inputs).toHaveLength(1);
        renderer.create(<LoginPage/>).toJSON();
    });
});
  
// describe('behavior', () => {
//     const setup = props => {
//         const component = render(<Pagination />);
//         component.rerender(<Pagination {...props} />);
//         return component;
//     };
//     it('change input', () => {
//         const { baseElement, getByTestId } = setup({
//             pagination: {
//             itemsPerPage: 20,
//             totalNumberOfResults: 19,
//             currentPageIndex: 2,
//             },
//             numberItem: 50,
//         });
//         const container = getByTestId('page-input');
//         fireEvent.change(container, { target: { value: '2' } });
//         expect(baseElement).toMatchSnapshot();
//     });
  
//     it('keydown with keycode = 13', () => {
      
//     });

// });
  
