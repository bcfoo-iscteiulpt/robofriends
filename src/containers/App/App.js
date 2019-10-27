import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ErrorBoundry from '../ErrorBoundry';
import { setSearchField, requestRobots } from './actions'
import CardList from '../../components/CardList';
import SearchBox from '../../components/SearchBox';
import Scroll from '../../components/Scroll';
import './App.css';

const mapStateToProps = ({
  searchRobots:{searchField},
  requestRobots:{robots,isPending, error}
}) => ({ searchField, robots,isPending, error })

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    onSearchChange: e => setSearchField(e.target.value),
    onRequestRobots: requestRobots
  }, dispatch)
})

const App = (props) => {
  useEffect(() => {
    props.onRequestRobots()
  }, [])

  const { searchField, onSearchChange, isPending, robots } = props;
  const filteredRobots = robots.filter(robot =>{
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  })
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

export default connect(mapStateToProps, mapDispatchToProps)(App)
