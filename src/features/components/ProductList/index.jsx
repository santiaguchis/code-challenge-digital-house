import PropTypes from 'prop-types';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { List } from 'src/core/components';
import ProductItem from '../ProductItem';

import styles from './styles';

const {
  container
} = styles;

const ProductList = ({
  style,
  items
}) => {
  const navigation = useNavigation();

  const goToProductPage = ( item ) => {
    navigation.navigate('ProductShow', item )
  }

  return (
    <View style={[container, style]}>
      <List>
        {
          items.map( (item) => (
            <ProductItem
              key={ item.id }
              item={ item }
              onSelected={ goToProductPage }
            />
          ))
        }
      </List>
    </View>
  )
}

ProductList.defaultProps = {
  items: []
}

ProductList.propTypes = {
  items: PropTypes.array,
  style: PropTypes.object,
}

export default ProductList;