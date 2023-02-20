import { StyleSheet } from 'react-native';

import { theme } from 'src/core/utils/styles';

const styles = StyleSheet.create({
  pageHeader: {
    backgroundColor: theme.colors.primaryLight,
    height: 150,
    justifyContent: 'flex-end',
    padding: 20,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: '800',
    lineHeight: 24,
  }
});

export default styles;