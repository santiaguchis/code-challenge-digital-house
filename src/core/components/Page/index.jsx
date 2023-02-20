
import { SafeAreaView, View } from 'react-native';
import styles from './styles';

const {
  container
} = styles;

const Page = ({
  children
}) => {
  return (
    <SafeAreaView 
      style={ container }
    >
      {children}
    </SafeAreaView>
  )
}

export default Page;

export {
  Page
}