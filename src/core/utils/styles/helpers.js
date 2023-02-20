import { Platform } from 'react-native';

import { theme } from './theme';
import { DISPLAY } from './rules';

export const setBoxShadow = (
  size
) => {
  const sizes = {
    xs: [ 0, 0, theme.colors.dark, 0, 0, 0, theme.colors.dark ],
    md: [ 0, 4, theme.colors.dark, 0.75, 4, 8, theme.colors.dark ]
  }

  const [
    xOffset,
    yOffset,
    shadowColorIos,
    shadowOpacity,
    shadowRadius,
    elevation,
    shadowColorAndroid,
  ] = sizes[size] || size[DISPLAY.XS];
  if ( Platform.OS === 'android' ) {
    return {
      elevation,
      shadowColor: shadowColorAndroid,
    };
  }
  return {
    shadowColor: shadowColorIos,
    shadowOffset: {
      width: xOffset, 
      height: yOffset
    },
    shadowOpacity,
    shadowRadius,
  };
}