import {
    CHANGE_SEARCHIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from '../../constants_redux'

export const searchRobots = (state={
    searchField: '',
}, action={}) => {
    switch (action.type) {
        case CHANGE_SEARCHIELD:
            return Object.assign({}, state, { ...state, searchField: action.payload })
    
        default:
            return state
    }
}

export const requestRobots = (state={
    robots: [],
    isPending: false,
    error: ''
}, action={})=>{
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, { isPending: true })

        case REQUEST_ROBOTS_FAILED:
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, { isPending: false, robots: action.payload })
    
        default:
            return state
    }
}