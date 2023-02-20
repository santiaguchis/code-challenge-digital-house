import { useContext, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';

import { AppContext } from '../../../contexts/AppContext';
import { useMovements } from 'src/hooks/useMovements';

import {
  Separator,
  Page,
  PageContent,
  PageFooter
} from 'src/core/components';

import WelcomeUser from 'src/features/components/WelcomeUser';
import YourPoints from 'src/features/components/YourPoints';
import YourMovements from 'src/features/components/YourMovements';
import Actions from 'src/features/components/Actions';

const Home = () => {
  const {
    movements
  } = useContext( AppContext )
  const { loadMovements } = useMovements()
  useEffect( () => {
    if ( movements?.length === 0 ) loadMovements();
  }, [] )
  return (
    <Page>
      <PageContent>
        <WelcomeUser />
        <Separator height={ 20 } />
        <YourPoints />
        <Separator height={ 20 } />
        <YourMovements />
      </PageContent>
      <PageFooter>
        <Actions />
      </PageFooter>
      <StatusBar style="auto" />
    </Page>
  )
}

export default Home;