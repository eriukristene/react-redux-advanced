export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

// action creators
// action creator is a function which returns an action
export const increment = () => {
    return {
        // like any action, it has to have a type
        type: INCREMENT
    };
};

export const decrement = () => {
    return {
        type: DECREMENT
    };
};

// pass any payload as arguments to the function creator
// in this case, value, which is the value we want to add when they click the add button
export const add = (value) => {
    return {
        type: ADD,
        val: value
    };
};

// here we are receiving a payload that we want for this action
export const subtract = (value) => {
    return {
        type: SUBTRACT,
        val: value
    };
};

export const storeResult = (res) => {
    return {
        type: STORE_RESULT,
        result: res
    };
};

export const deleteResult = (resElId) => {
    return {
        type: DELETE_RESULT,
        resultElId: resElId
    };
};