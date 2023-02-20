import { StatusBar, Text, View  } from 'react-native';

import { theme } from 'src/core/utils/styles';

import styles from './styles';

const {
  pageHeader,
  pageTitle
} = styles;

const PageHeader = ({
  title
}) => {
  return (
    <View style={ pageHeader }>
      <StatusBar
        backgroundColor={ theme.colors.primaryLight }
      />
      <Text style={ pageTitle }>{ title }</Text>
    </View>
  )
}

export {
  PageHeader
}