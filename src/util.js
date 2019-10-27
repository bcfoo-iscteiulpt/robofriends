import { path, curryN } from 'ramda'

const getTargetValue = path(['target', 'value'])
/*
args[0] => getTargetValue
args[1] => Fn() that receives the targetValue
args[2] => event: obj
*/
export const applyOnTargetValue = curryN(
    3, (...args) => args[1](args[0](args[2]))
)(getTargetValue)