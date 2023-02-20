import { useState } from 'react';
import { AppContext } from './AppContext';

const initialState = {
  user: {
    firstName: 'Ruben',
    lastName: 'Rodriguez'
  }
}

export const AppProvider = ({ children }) => {
  const [ movements, setMovements ] = useState([]);
  const [ filtered, setFiltered ] = useState([]);
  const [ totalPoints, setTotalPoints ] = useState(0);
  const [ filterSelected, setFilterSelected ] = useState('');

  const [ isLoading, setIsLoading ] = useState(true);

  const onHandleFilter = (items) => {
    setIsLoading(false);
    setFiltered(items)
  }
  const appState = {
    ...initialState,
    isLoading,
    movements,
    filtered,
    totalPoints,
    filterSelected,
    setMovements,
    setFiltered,
    setTotalPoints,
    setFilterSelected,
    setIsLoading,
    onHandleFilter,
  }
  return (
    <AppContext.Provider
      value={appState}
    >
      { children }
    </AppContext.Provider>
  )
}