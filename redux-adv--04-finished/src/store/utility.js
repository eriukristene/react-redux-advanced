export const updateObject = (oldObject, updatedValues) => {
    return {
        ...oldObject, // create a new object with all the object values and props inside it
        ...updatedValues
    }
};