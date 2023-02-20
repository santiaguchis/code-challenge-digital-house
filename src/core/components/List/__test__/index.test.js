import { render, screen } from '@testing-library/react-native';
import { Text } from 'react-native';
import { List } from 'src/core/components/List';

let component;
describe('List core/component', () => {
  const placeholderText = 'Hello List'
  beforeEach(() => {
    component = render(<List><Text>{placeholderText}</Text></List>)
  })

  it('renderer element', () => {
    expect(component).toBeDefined();
  })
  it('Check text in component', () => {
    const queryText = screen.getByText(placeholderText);
    expect(queryText).toHaveTextContent(placeholderText);
  })

  it('Check snapshot', () => {
    expect(screen.toJSON()).toMatchSnapshot();
  })
})