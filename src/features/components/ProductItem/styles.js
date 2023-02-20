import { StyleSheet } from 'react-native';

import { theme } from 'src/core/utils/styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    marginVertical: 4
  },
  figure: {
    width: 56,
    height: 56,
    backgroundColor: 'silver',
    borderRadius: 10,
    overflow: 'hidden',
  },
  productImage: {
    objectFit: 'cover',
    height: '100%'
  },
  detail: {
    paddingHorizontal: 10,
    justifyContent: 'space-around',
    height: '100%'
  },
  productName: {
    color: theme.colors.primaryText,
    fontSize: 14,
    fontWeight: '800',
    lineHeight: 19,
  },
  dateCreated: {
    color: theme.colors.primaryText,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
  },
  itemPoints: {
    width: 'auto',
    flexDirection: 'row',
  },
  amount: {
    fontSize: 16,
    fontWeight: '800',
    lineHeight: 22,
  },
  indicator: {
    fontSize: 16,
    fontWeight: '800',
    lineHeight: 22,
  }
})

export default styles;