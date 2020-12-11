import { shallow } from 'enzyme';
import React from 'react';
import { getByAttr } from '../test/testUtils';
import App from '../components/app';

const setup = () => {
    return shallow(<App />);
}

describe('Test App Component', () => {
    test('App component render complete', () => {
        const wrapper = setup();
        const appComponent = getByAttr(wrapper, 'app-component');
        expect(appComponent.length).toBe(1);
    });
});