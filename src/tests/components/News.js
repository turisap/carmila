/**
 * Created by HP on 15-Dec-17.
 */
import React from 'react';
import { shallow } from 'enzyme';
import News from '../../components/pages/News';

test('should render News page properly', () => {
    const wrapper = shallow(<News/>);
    expect(wrapper).toMatchSnapshot();
});