const REGEX_NUMBER = /\B(?=(\d{3})+(?!\d))/g;

export const toNumberFormat = (value = 0 ) => {
  if ( value === undefined || typeof value !== 'number' ) return 0;
  return value.toString().replace(REGEX_NUMBER, ",");
}