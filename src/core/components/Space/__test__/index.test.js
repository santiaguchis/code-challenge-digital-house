import { render, screen } from '@testing-library/react-native';
import { Space } from 'src/core/components/Space';

let component;
describe('Space core/component', () => {
  beforeEach(() => {
    component = render(<Space />)
  })

  it('renderer element', () => {
    expect(component).toBeDefined();
  })
  it('Check snapshot', () => {
    expect(screen.toJSON()).toMatchSnapshot();
  })
})