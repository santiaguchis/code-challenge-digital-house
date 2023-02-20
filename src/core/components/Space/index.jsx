import { View } from 'react-native';

import styles from './styles';

const {
  space
} = styles;

const Space = ({ style = {} }) => {
  return (
    <View style={ [space, style] }></View>
  )
}

export default Space;

export {
  Space
}