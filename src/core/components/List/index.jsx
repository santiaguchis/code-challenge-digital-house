import PropTypes from 'prop-types';	
import { ScrollView, View } from 'react-native';

const List = ({
  children
}) => {
  return (
    <View>
      <ScrollView>
        {children}
      </ScrollView>
    </View>
  )
}

List.defaultProps = {
  items: [],
}

List.propTypes = {
  items: PropTypes.array,
}

export {
  List
}