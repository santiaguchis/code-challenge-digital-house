import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native'

import styles from './styles';

const {
  button,
  text,
} = styles;

const Button = ({
  size,
  style,
  onPress,
  children,
}) => {
  const goTo = () => {
    onPress()
  }
  const styleText = {
    ...text,
    fontSize: size === 'sm' ? 12 : 16
  }
  return (
    <TouchableOpacity
      onPress={ goTo }
      style={[button,style]}
    >
      <Text 
        testID='text-button' 
        style={ styleText }
      >{children}</Text>
    </TouchableOpacity>
  )
}

Button.defaultProps = {
  style: {},
  size: 'sm',
  onPress: () => {},
}

Button.propTypes = {
  style: PropTypes.object,
  size: PropTypes.string,
  onPress: PropTypes.func,
  children: PropTypes.string.isRequired,
}

export {
  Button
}