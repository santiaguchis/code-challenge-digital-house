import { render, screen } from '@testing-library/react-native';
import { ListHeader } from 'src/core/components/ListHeader';

let component;
describe('ListHeader core/component', () => {
  const placeholderText = 'Hello List'
  beforeEach(() => {
    component = render(<ListHeader textToUpper>{placeholderText}</ListHeader>)
  })

  it('renderer element', () => {
    expect(component).toBeDefined();
  })
  it('Check text in component', () => {
    const queryText = screen.getByText(placeholderText);
    expect(queryText).toHaveTextContent(placeholderText);
  })

  it('Check style text uppercase', () => {
    const textElement = screen.getByTestId('text-element');
    expect(textElement.props.style.textTransform).toEqual('uppercase');
  })


  it('Check snapshot', () => {
    expect(screen.toJSON()).toMatchSnapshot();
  })
})