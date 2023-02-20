import { formatDate } from './date';
import { toNumberFormat } from './number';

const mapToItem = ( item = {} ) => {
  return {
    id = 0,
    product = '',
    createdAt = '',
    image = '',
    points = 0,
    is_redemption = false,
  } = item;
}

export const responseToFiltered = (item) => {
  const { 
    createdAt, 
    points 
  } = item;
  return {
    ...mapToItem(item),
    totalPoints: toNumberFormat(points),
    dateToHuman: formatDate( createdAt, 'D [de] MMMM, YYYY' )
  }
}
