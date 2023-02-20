import { useContext } from 'react'
import { AppContext } from 'src/contexts';
import { apiRest, services } from 'src/api'
import { 
  responseToFiltered,
} from 'src/core/utils';

export const useMovements = () => {
  const { 
    setMovements,
    onHandleFilter,
    setTotalPoints, 
    setFilterSelected,
  } = useContext( AppContext );
  const calculateTotalPoints = (accumulator, currentValue) => accumulator + currentValue
  const loadMovements = async() => {
    setFilterSelected( 'all' )
    const response = await apiRest.get( services.getMovementsList )
    if ( response?.length > 0 ) {
      setMovements( response )
      const items = response.map( responseToFiltered )
      const pointsAvailable = response.filter( item => !item.is_redemption )
                                      .map( (item) => item.points )
      const totalPointsAvailable = pointsAvailable.reduce( calculateTotalPoints )
      onHandleFilter( items )
      setTotalPoints( totalPointsAvailable )
    }
  }

  return {
    loadMovements
  }
}