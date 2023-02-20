import { useContext } from 'react'
import { AppContext } from 'src/contexts';
import { responseToFiltered } from 'src/core/utils';

export const useFiltered = () => {
  
  const { 
    setIsLoading,
    onHandleFilter,
    movements,
  } = useContext( AppContext );
  const isLoading = true;
  const loadFilter = (filter) => {
    setIsLoading(true)
    if ( filter === 'all' ) {
      onHandleFilter( movements.map( responseToFiltered ) )
      return;
    }
    const itemsFiltered = movements.filter( (item) => {
      if ( filter === 'won' ) return item.is_redemption;
      if ( !item.is_redemption ) return item;
    } );
    const items = itemsFiltered.map( responseToFiltered )
    onHandleFilter( items );
  }

  return {
    isLoading,
    loadFilter
  }
}