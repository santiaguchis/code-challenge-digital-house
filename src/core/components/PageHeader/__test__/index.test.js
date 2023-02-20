import { render, screen } from '@testing-library/react-native';
import { PageHeader } from 'src/core/components/PageHeader';

let component;
describe('PageHeader core/component', () => {
  const placeholderText = 'Hello Page Header'
  beforeEach(() => {
    component = render(<PageHeader title={ placeholderText } />)
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