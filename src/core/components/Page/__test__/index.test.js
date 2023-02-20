import { render, screen } from '@testing-library/react-native';
import { Text, View } from 'react-native';
import { Page } from 'src/core/components/Page';

let component;
describe('Page core/component', () => {
  const placeholderText = 'Hello Page'
  beforeEach(() => {
    component = render(<Page>
      <View>
        <Text>{placeholderText}</Text>
      </View>
    </Page>)
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