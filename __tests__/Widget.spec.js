import React from 'react';
import {render} from '@testing-library/react-native';
import WidgetContainer from '../src/Widget';

describe('WidgetContainer', () => {
  it('loads widgets upon mount', () => {
    const {queryByText} = render(<WidgetContainer />);

    expect(queryByText('Widget 1')).not.toBeNull();
    expect(queryByText('Widget 2')).not.toBeNull();
  });
});