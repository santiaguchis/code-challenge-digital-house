import { StyleSheet } from 'react-native';

import { theme } from 'src/core/utils/styles';

const styles = StyleSheet.create({
  action: {
    marginLeft: 10,
    width: 14,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  actionIcon: {
    fontSize: 20,
    fontWeight: '800',
    color: theme.colors.primaryText,
  }
})

export default styles;