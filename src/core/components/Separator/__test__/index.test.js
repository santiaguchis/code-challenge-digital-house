import { render, screen } from '@testing-library/react-native';
import { Separator } from 'src/core/components/Separator';

let component;
describe('Separator core/component', () => {
  const height = 20
  const width = 20
  beforeEach(() => {
    component = render(<Separator height={height} width={width} />)
  })

  it('renderer element', () => {
    expect(component).toBeDefined();
  })
  it('Check size height', () => {
    const element = screen.getByTestId('separator');
    expect(element.props.style.height).toEqual(height);
  })
  it('Check size width', () => {
    const element = screen.getByTestId('separator');
    expect(element.props.style.width).toEqual(width);
  })

  it('Check snapshot', () => {
    expect(screen.toJSON()).toMatchSnapshot();
  })
})