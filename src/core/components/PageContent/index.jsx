import { View } from "react-native";

import styles from './styles';

const {
  content
} = styles;

const PageContent = ({
  children
}) => {
  return (
    <View style={ content }>
      { children }
    </View>
  )
}

export {
  PageContent
}