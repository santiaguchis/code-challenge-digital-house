import { View } from 'react-native';

import styles from './styles';

const {
  footer
} = styles;

const PageFooter = ({
  children
}) => {
  return (
    <View style={ footer }>
      { children }
    </View>
  )
}

export {
  PageFooter
}