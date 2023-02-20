import { StyleSheet, StatusBar } from 'react-native';

import { theme } from 'src/core/utils/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    marginTop: StatusBar.currentHeight,
  },
});

export default styles;