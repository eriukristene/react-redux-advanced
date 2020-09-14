// use this in the reducers to help clean up the code there
// because we copy the state in several places
// using the spread operator, so this will help to clean everything up

export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};