import PropTypes from 'prop-types';
import { Image, Text, View } from "react-native"

import {
  ListHeader,
  Card, 
  Separator 
} from 'src/core/components';

import styles from './styles';

const {
  container,
  card,
  dateCreated,
  productPoints,
  productImage,
} = styles;


const ProductDetail = ({
  item
}) => {
  const {
    image,
    totalPoints,
    dateToHuman
  } = item;
  return (
    <View style={container}>
      <Card style={ card }>
        <Image
          style={ productImage }
          source={{ uri: image }}
        />
      </Card>
      <Separator height={ 20 } />
      <ListHeader>Detalles del producto:</ListHeader>
      <Text style={ dateCreated }>Comprado el { dateToHuman }</Text>
      <Separator height={ 20 } />
      <ListHeader>Con esta compra acumulaste:</ListHeader>
      <Text style={ productPoints }>{ totalPoints } puntos</Text>
    </View>
  )
}

ProductDetail.propTypes = {
  item: PropTypes.object.isRequired
}

export default ProductDetail;