import { useContext } from 'react';
import { Text, View } from 'react-native';
import Card from 'src/core/components/Card';
import ListHeader from 'src/core/components/ListHeader';
import { 
  toNumberFormat
} from 'src/core/utils';

import { setBoxShadow } from 'src/core/utils/styles';
import { AppContext } from 'src/contexts';
import styles from './styles';

const {
  container,
  label,
  points,
  cardPoints
} = styles;

const YourPoints = () => {
  const { totalPoints } = useContext( AppContext )
  return (
    <View style={ container }>
      <ListHeader textToUpper>Tus puntos</ListHeader>
      <Card style={ [cardPoints, setBoxShadow('md')] }>
        <Text style={ label }>Diciembre</Text>
        <Text style={ points }>{ toNumberFormat( totalPoints ) } pts</Text>
      </Card>
    </View>
  )
}


export default YourPoints;