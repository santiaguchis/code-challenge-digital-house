import { render, screen } from '@testing-library/react-native';
import { Text } from 'react-native';
import { Card } from 'src/core/components/Card';

let component;
describe('Card core/component', () => {
  const placeholderText = 'Hello Card'
  beforeEach(() => {
    component = render(<Card><Text>{placeholderText}</Text></Card>)
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