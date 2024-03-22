import React from 'react';
import {render,fireEvent,screen,test,expect} from '@testing-library/react';
import TestCounter from './Testing';

test('increments counter',()=>{
    render(<TestCounter/>);

    const counter=screen.getByTestId('counter');
    const incrementButton=screen.getByTestId('increment');

    fireEvent.click(incrementButton);

    expect(counter).toHaveTextContent('1');

});