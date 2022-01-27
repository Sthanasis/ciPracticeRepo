import React from "react";
import {render } from '@testing-library/react-native'
import Hello from "../src/Hello";

describe('Hello', () => {
    it('dispalys the passed in name', () => {
        const {queryByText} = render(<Hello name={'Sakis'}/>)
        expect(queryByText('Hello, Sakis!')).not.toBeNull()
    })
})