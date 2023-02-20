import { StyleSheet } from 'react-native';

import { theme } from 'src/core/utils/styles';

export default StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: theme.colors.primaryColor,
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: theme.colors.white,
    fontWeight: '800',
    fontSize: 12,
    lineHeight: 16
  }
})