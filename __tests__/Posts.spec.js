import React from 'react';
import { render, act } from '@testing-library/react-native';
import PostsContainer from '../src/PostsContainer';
import api from '../src/api';

jest.mock('../src/api');

describe('PostsContainer', () => {
  it('loads posts upon mount', async () => {
    api.get.mockResolvedValue([{ id: 1, title: 'post 1' }]);
    const { findByText } = render(<PostsContainer />);
    await findByText('post 1');
  });
});
