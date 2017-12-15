/**
 * Created by HP on 15-Dec-17.
 */
import React from 'react';
import { shallow } from 'enzyme';
import Chiefs from '../../components/pages/Chiefs'

test('should render Chiefs page', () => {
    const wrapper = shallow(<Chiefs/>);
    expect(wrapper).toMatchSnapshot();
});
/**
 * Created by HP on 15-Dec-17.
 */
