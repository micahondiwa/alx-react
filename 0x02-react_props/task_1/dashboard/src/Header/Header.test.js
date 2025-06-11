/**Headerjs test */
import Header from './Header.js';
import shallow from 'enzyme';

Describe('Header component', () => {
    it('renders without crushing', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.exists())toBe(true);
    });

    it('renders an img and h1 tag', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('img').length).toBe(1);
        expect(wrapper.find('1').length).toBe(1);
    })
})