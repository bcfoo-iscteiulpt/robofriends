import React, { useEffect } from 'react'
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundry from '../containers/ErrorBoundry';
import CardList from './CardList';

const AppUI = ({ onSearchChange, isPending, filteredRobots, onRequestRobots }) => {
    useEffect(() => {
      onRequestRobots()
    }, [onRequestRobots])
  
    return isPending ?
      <h1>Loading...</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      )
  }

  export default AppUI