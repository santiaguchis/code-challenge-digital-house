import { useContext } from 'react';
import { Text, View } from 'react-native'
import { AppContext } from 'src/contexts';

import styles from './styles';

const {
  title,
  subTitle,
  container,
} = styles;

const WelcomeUser = () => {
  const store = useContext( AppContext );
  const {
    firstName,
    lastName
  } = store.user
  return (
    <View style={ container }>
      <Text style={ title }>Bienvenido de vuelta!</Text>
      <Text style={ subTitle }>{firstName} {lastName}</Text>
    </View>
  )
}

export default WelcomeUser;
