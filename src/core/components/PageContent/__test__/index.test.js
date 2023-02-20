import { render, screen } from '@testing-library/react-native';
import { Text, View } from 'react-native';
import { PageContent } from 'src/core/components/PageContent';

let component;
describe('PageContent core/component', () => {
  const placeholderText = 'Hello Page Content'
  beforeEach(() => {
    component = render(<PageContent>
      <View>
        <Text>{placeholderText}</Text>
      </View>
    </PageContent>)
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