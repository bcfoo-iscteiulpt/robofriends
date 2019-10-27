import {
    CHANGE_SEARCHIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from '../../constants_redux';

export const setSearchField = text => ({
    type: CHANGE_SEARCHIELD,
    payload: text
})

export const requestRobots = () => (dispatch) => {
    dispatch({type: REQUEST_ROBOTS_PENDING})
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=>response.json())
      .then(payload=>dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload }))
      .catch(payload=>dispatch({type: REQUEST_ROBOTS_FAILED, payload}))
}