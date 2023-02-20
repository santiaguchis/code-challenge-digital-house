import { StyleSheet } from 'react-native';

import { theme, RADIUS } from 'src/core/utils/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productImage: {
    objectFit: 'cover',
    height: '100%'
  },
  card: {
    borderRadius: RADIUS.MD,
    padding: 0,
    overflow: 'hidden',
    height: 250,
  },
  dateCreated: {
    fontSize: 16,
    fontWeight: '800',
    lineHeight: 21
  },
  productPoints: {
    fontSize: 24,
    fontWeight: '800',
    lineHeight: 32
  }
})

export default styles;