import * as React from 'react';
import { shallow } from 'enzyme';

import Button from '../Button';

describe('Button', () => {
	describe('render', () => {
		test('Deberia renderizar un 1 cuando se haya hecho un click en el botón', () => {
			const wrapper = shallow(<Button name="Eric:" />);
			wrapper.find('button').simulate('click');
			expect(wrapper.find('button').text()).toBe('Eric: 1');
		});
	});
});
