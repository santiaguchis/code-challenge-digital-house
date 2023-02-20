import { StyleSheet } from 'react-native';
import { 
  theme,
  setBoxShadow,
  PADDING,
  DISPLAY,
  RADIUS
} from 'src/core/utils/styles';

export default StyleSheet.create({
  card: {
    backgroundColor: theme.colors.white,
    padding: PADDING.LG,
    borderRadius: RADIUS.LG,
    ...setBoxShadow(DISPLAY.MD)
  }
})