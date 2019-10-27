import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setSearchField, requestRobots } from './actions'
import './App.css';
import { getFilteredRobots, getIsPending, getHasError } from './selector';
import { applyOnTargetValue } from '../../util';
import AppUI from '../../components/App';

const mapStateToProps = state => ({
  isPending: getIsPending(state),
  error: getHasError(state),
  filteredRobots: getFilteredRobots(state)
})

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    onSearchChange: applyOnTargetValue(setSearchField),
    onRequestRobots: requestRobots
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(AppUI)
