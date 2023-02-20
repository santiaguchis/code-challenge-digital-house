import { render, screen } from '@testing-library/react-native';
import { Button } from 'src/core/components/Button';
import { PageFooter } from 'src/core/components/PageFooter';

let component;
describe('PageFooter core/component', () => {
  const placeholderText = 'Hello Page Footer'
  beforeEach(() => {
    component = render(<PageFooter>
      <Button>{placeholderText}</Button>
    </PageFooter>)
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