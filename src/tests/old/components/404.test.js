/**
 * Created by HP on 03-Dec-17.
 */
import React from 'react';
import { shallow } from 'enzyme';
import notFound from '../../components/404';

test('should render 404 page',  () => {
    const wrapper = shallow(<notFound />);
    expect(wrapper).toMatchSnapshot();
});