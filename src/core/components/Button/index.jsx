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
      <Text style={ styleText }>{children}</Text>
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
  onPress: PropTypes.func,
  size: PropTypes.string,
  children: PropTypes.string,
}

export default Button;

export {
  Button
}