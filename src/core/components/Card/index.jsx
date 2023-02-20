import { View } from 'react-native';

import styles from './styles';

const {
  card
} = styles;

const Card = ({ style = {}, children }) => {
  return (
    <View style={ [card, style] }>
      { children }
    </View>
  )
}

export default Card;

export {
  Card
}