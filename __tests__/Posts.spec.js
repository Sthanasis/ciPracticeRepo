import React from 'react';
import {render} from '@testing-library/react-native';
import PostsContainer from '../src/PostsContainer';
import api from '../src/api';

jest.mock(api)

describe('PostsContainer', () => {
  it('loads posts upon mount', () => {
    const {queryByText} = render(<PostsContainer />);

    expect(queryByText('post 1')).not.toBeNull();
    expect(queryByText('post 2')).not.toBeNull();
  });
});