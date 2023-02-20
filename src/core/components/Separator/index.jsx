import PropTypes from 'prop-types';
import { View } from 'react-native';

const Separator = ({
  width,
  height,
}) => {
  return (
    <View testID='separator' style={{ width, height }} />
  )
}

Separator.defaultProps = {
  width: 0,
  height: 0,
}

Separator.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
}

export {
  Separator
}