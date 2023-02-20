import { render, screen } from '@testing-library/react-native';
import { AppProvider } from 'src/contexts';

import HomeScreen from 'src/features/screens/Home';

let component;
describe('<HomeScreen /> features/screens', () => {
  beforeEach(() => {
    component = render(
      <AppProvider>
        <HomeScreen />
      </AppProvider>
    )
  })

  it('renderer element', () => {
    expect(component).toBeDefined();
  })

  it('Check snapshot', () => {
    expect(screen.toJSON()).toMatchSnapshot();
  })
})