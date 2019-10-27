import { pathOr, path } from 'ramda'
import { createSelector } from 'reselect'

const REQUEST_ROBOTS = ['requestRobots']
const SEARCH_ROBOTS = ['searchRobots']

const getSearchField = path([...SEARCH_ROBOTS, 'searchField'])
const getRobots = pathOr([], [...REQUEST_ROBOTS, 'robots'])
export const getIsPending = path([...REQUEST_ROBOTS, 'isPending'])
export const getHasError = path([...REQUEST_ROBOTS, 'error'])

export const getFilteredRobots = createSelector(
    [getSearchField,getRobots],
    (searchField, robots) => robots.filter(
        robot => 
            path(['name'], robot).toLowerCase()
                .includes(searchField.toLowerCase())
    )
)
