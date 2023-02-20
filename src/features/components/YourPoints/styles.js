import { StyleSheet } from 'react-native';

import { theme } from 'src/core/utils/styles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection:'column',
    gap: 10
  },
  cardPoints: {
    backgroundColor: theme.colors.primaryColor,
    paddingBottom: 40,
    width: '80%'
  },
  label: {
    color: theme.colors.white,
    fontSize: 16,
    fontWeight: '800',
    lineHeight: 21.86,

  },
  points: {
    color: theme.colors.white,
    fontSize: 32,
    lineHeight: 43.71,
    fontWeight: '800',
    textAlign: 'center'
  },
})

export default styles;