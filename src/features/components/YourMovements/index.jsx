import { useContext } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { AppContext } from 'src/contexts';
import { ListHeader } from 'src/core/components';
import ProductList from '../ProductList';

import styles from './styles';

const {
  container,
  list
} = styles

const YourMovements = () => {
  const { 
    filtered, 
    isLoading 
  } = useContext( AppContext )
  return (
    <View style={ container }>
      <ListHeader textToUpper>Tus movimientos</ListHeader>
      {
        isLoading
        ? <ActivityIndicator size="large" />
        : <ProductList style={ list } items={ filtered }/>
      }
      
    </View>
  )
}

export default YourMovements;
