import PropTypes from 'prop-types';

import { StyleSheet, Text, View } from 'react-native';

import styles from './styles';

const {
  container,
  title,
} = styles;

const ListHeader = ({ textToUpper, children }) => {
  const titleStyle = {
    ...title,
    textTransform: textToUpper ? 'uppercase' : 'none'
  }
  return (
    <View style={ container }>
      <Text style={ titleStyle }>
      { children }
      </Text>
    </View>
  )
}

ListHeader.propTypes = {
  textToUpper: false,
  children: '',
};

ListHeader.propTypes = {
  textToUpper: PropTypes.bool,
  children: PropTypes.string
};

export default ListHeader;

export {
  ListHeader
}