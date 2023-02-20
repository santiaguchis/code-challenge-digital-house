import { StyleSheet } from 'react-native';

import { theme } from 'src/core/utils/styles';

export default StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 10,
    marginBottom: 10,
  },
  title: {
    color: theme.colors.secondaryText,
    fontSize: 14,
    fontWeight: '800',
    lineHeight: 19.12
  }
})