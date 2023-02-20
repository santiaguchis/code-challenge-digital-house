import { useContext } from 'react';
import { View } from 'react-native';

import { AppContext } from 'src/contexts';
import { Button, Separator } from 'src/core/components';
import { useFiltered } from 'src/hooks/useFiltered';

import styles from './styles';

const {
  container,
} = styles;

export const Actions = () => {
  const { 
    filterSelected, 
    setFilterSelected,
  } = useContext( AppContext );
  const { loadFilter } = useFiltered()
  
  const handleFiltered = ( filter ) => {
    setFilterSelected(filter)
    loadFilter(filter)
  }
  return (
    <View style={ container }>
      {
        filterSelected === 'all'
        ? <>
          <Button onPress={ () => handleFiltered('won') }>Ganados</Button>
          <Separator width={ 20 }/>
          <Button onPress={ () => handleFiltered('redeemed') }>Canjeados</Button>
        </>
        : <Button onPress={ () => handleFiltered('all') } size="lg">Todos</Button>
      }
    </View>
  )
}

export default Actions;