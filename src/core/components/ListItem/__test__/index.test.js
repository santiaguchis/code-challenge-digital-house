import { render, screen } from '@testing-library/react-native';
import { Text, View } from 'react-native';
import { ListItem } from 'src/core/components/ListItem';

let component;
describe('ListItem core/component', () => {
  const placeholderText = 'Hello List Item'
  beforeEach(() => {
    component = render(<ListItem>
      <View>
        <Text>{placeholderText}</Text>
      </View>
    </ListItem>)
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