/**
 * Created by HP on 02-Dec-17.
 */
import { shallow } from 'enzyme';
import React from 'react';
import  toJson  from 'enzyme-to-json'
import Header from '../../components/Header';

test('should render Header correctly', () => {
   const wrapper = shallow(<Header/>);
   expect(toJson(wrapper)).toMatchSnapshot();
});



