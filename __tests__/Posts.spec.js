import React from 'react';
import {render} from '@testing-library/react-native';
import PostsContainer from '../src/PostsContainer';
import api from '../src/api';

jest.mock('../src/api')

describe('PostsContainer', () => {
  it('loads posts upon mount', async () => {
    api.get.mockResolvedValue([{id: 1, title: 'post 1'}, {id: 2, title: 'post 2'}]);
    const { findByText } = render(<PostsContainer />);
    await findByText('post 1')
    await findByText('post 2')
  });
});