import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

// synchronous action creators for building the burger
// we have a payload of the name from the mapDispatchToProps in BurgerBuilder.js
// name is the input to the action creator
export const addIngredient = ( name ) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    };
};

// same as above
export const removeIngredient = ( name ) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    };
};

// asynchronous action creators for building the burger
export const setIngredients = ( ingredients ) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients // this is our parameter
    };
};

export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    };
};

export const initIngredients = () => {
    // redux thunk allows us to access dispatch and use action creators like this
    // allows us to use async code
    // and dispatch a new action when done
    return dispatch => {
        // fetching the ingredients from the server here
        axios.get( 'https://react-my-burger-7d58a.firebaseio.com/ingredients.json' )
            .then( response => {
                // dispatch the setIngredients action creator
                // data is the JS object we want to use
               dispatch(setIngredients(response.data));
            } )
            .catch( error => {
                dispatch(fetchIngredientsFailed());
            } );
    };
};