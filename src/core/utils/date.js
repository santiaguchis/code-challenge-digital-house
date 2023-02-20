import dayjs from 'dayjs'
import 'dayjs/locale/es';
dayjs.locale('es')

export const formatDate = ( date, format = 'DD/MM/YYYY' ) => {
  if ( !date ) return '';
  return dayjs( date ).format( format );
  
}