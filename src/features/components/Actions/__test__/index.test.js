import { render, screen } from '@testing-library/react-native';
import { AppProvider } from 'src/contexts';

import Actions from 'src/features/components/Actions';

let component;
describe('<Actions /> features/component', () => {
  const findTextButton = 'Todos'
  beforeEach(() => {
    component = render(
      <AppProvider>
        <Actions />
      </AppProvider>
    )
  })

  it('renderer element', () => {
    expect(component).toBeDefined();
  })

  it('Check text in component', () => {
    const textInComponent = screen.getByText(findTextButton);
    expect(textInComponent).toHaveTextContent(findTextButton);
  })

  it('Check snapshot', () => {
    expect(screen.toJSON()).toMatchSnapshot();
  })
})