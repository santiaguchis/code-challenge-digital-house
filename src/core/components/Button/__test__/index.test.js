import { render, screen } from '@testing-library/react-native';
import { Button } from 'src/core/components/Button';

let component;
describe('Button core/component', () => {
  const placeholderText = 'Hello'
  beforeEach(() => {
    component = render(<Button>{placeholderText}</Button>)
  })

  it('renderer element', () => {
    expect(component).toBeDefined();
  })
  it('Check text in component', () => {
    const textInButton = screen.getByText(placeholderText);
    expect(textInButton).toHaveTextContent(placeholderText);
  })

  it('Check style Text md', () => {
    const buttonTextElement = screen.getByTestId('text-button');
    expect(buttonTextElement.props.style.fontSize).toEqual(12);
  })

  it('Check snapshot', () => {
    expect(screen.toJSON()).toMatchSnapshot();
  })
})