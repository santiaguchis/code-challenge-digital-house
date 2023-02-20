import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import {
  Button,
  Page,
  PageContent,
  PageHeader,
  PageFooter
} from 'src/core/components';

import ProductDetail from 'src/features/components/ProductDetail';

const ProductShow = ({
  route
}) => {
  const navigation = useNavigation();
  const { params } = route;
  const goBack = () => navigation.goBack();
  const title = params.product
  return (
    <Page>
      <PageHeader
        title={ title }
      />
      <PageContent>
        <ProductDetail item={params}/>
      </PageContent>
      <PageFooter>
        <Button 
          onPress={ goBack }
          size="lg"
        >Aceptar</Button>
      </PageFooter>
    </Page>
  )
}

export default ProductShow;