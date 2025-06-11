/**Footerjs test */

import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders text containing "Copyright"', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text().toLowerCase()).toContain('copyright');
  });
});
