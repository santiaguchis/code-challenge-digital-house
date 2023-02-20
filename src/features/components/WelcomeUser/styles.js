import { StyleSheet, StatusBar } from 'react-native';

import { theme } from 'src/core/utils/styles';

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  title: {
    color: theme.colors.primaryText,
    fontSize: 20,
    fontWeight: '800',
    lineHeight: 27.32
  },
  subTitle: {
    color: theme.colors.primaryText,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 21.86
  }
})

export default styles;