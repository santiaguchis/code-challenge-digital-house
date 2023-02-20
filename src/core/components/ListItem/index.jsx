import PropTypes from 'prop-types';	
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';

const {
  action,
  actionIcon
} = styles

const ListItem = ({
  onPress,
  style,
  children,
}) => {
  return (
    <TouchableOpacity
      onPress={ onPress }
      style={ style }
    >
      { children }
      <View style={ action }>
        <Text style={ actionIcon }>&gt;</Text>
      </View>
    </TouchableOpacity>
  )
}

ListItem.defaultProps = {
  onPress: () => {},
  style: {},
}

ListItem.propTypes = {
  onPress: PropTypes.func,
  style: PropTypes.object,
  children: PropTypes.any
}

export default ListItem;

export {
  ListItem
}