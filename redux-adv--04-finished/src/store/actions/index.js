// groups exports from other files
// exports all the action creators
export {
    add,
    subtract,
    increment,
    decrement
} from './counter';
export {
    // saveResult could be exported, but because it is not used in any other files,
    // we don't need to export it here
    storeResult,
    deleteResult
} from './result';