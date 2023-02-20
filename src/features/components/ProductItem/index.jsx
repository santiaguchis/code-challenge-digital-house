import PropTypes from 'prop-types';
import { Image, Text, View } from 'react-native';

import {
  Space,
  ListItem
} from 'src/core/components';

import { theme } from 'src/core/utils/styles';
import styles from './styles';

const {
  container,
  figure,
  detail,
  productName,
  dateCreated,
  itemPoints,
  amount,
  productImage,
  indicator,
} = styles

const ProductItem = ({
  item,
  onSelected
}) => {
  const handlePress = () => {
    onSelected( item )
  }
  const {
    image,
    product,
    totalPoints,
    dateToHuman,
    is_redemption,
  } = item

  const indicatorIcon = ( is_redemption ) ? '+' : '-' 
  const indicatorStyle = {
    ...indicator,
    color: ( is_redemption ) ? theme.colors.danger : theme.colors.success
  }

  return (
    <ListItem
      style={ container }
      onPress={ handlePress }
    >
      <View style={ figure }>
        <Image
          style={ productImage }
          source={{ uri: image }}
        />
      </View>
      <View style={ detail }>
        <Text style={ productName }>{ product }</Text>
        <Text style={ dateCreated }>{ dateToHuman }</Text>
      </View>
      <Space />
      <View style={ itemPoints }>
        <Text style={ indicatorStyle }>{ indicatorIcon }</Text>
        <Text style={ amount }>{ totalPoints }</Text>
      </View>
    </ListItem>
  )
};

ProductItem.defaultProps = {
  onSelected: () => {},
  item: {}
}

ProductItem.propTypes = {
  onSelected: PropTypes.func,
  item: PropTypes.object,
}

export default ProductItem;