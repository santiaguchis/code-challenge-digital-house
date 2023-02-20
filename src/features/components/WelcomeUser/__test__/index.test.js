import { render, screen } from '@testing-library/react-native';
import { AppProvider } from 'src/contexts';

import WelcomeUser from 'src/features/components/WelcomeUser';

let component;
describe('<WelcomeUser /> features/component', () => {
  const findTextUsername = 'Ruben Rodriguez';
  beforeEach(() => {
    component = render(
      <AppProvider>
        <WelcomeUser />
      </AppProvider>
    )
  })

  it('renderer element', () => {
    expect(component).toBeDefined();
  })

  it('Check text in component', () => {
    const textInComponent = screen.getByText(findTextUsername);
    expect(textInComponent).toHaveTextContent(findTextUsername);
  })

  it('Check snapshot', () => {
    expect(screen.toJSON()).toMatchSnapshot();
  })
})