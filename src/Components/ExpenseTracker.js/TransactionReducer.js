const TransactionReducer = ((state, action) => {

    // console.log(s);
    switch (action.type) {
        case "CREATE_TRANSACTION":
            return [...state, action.payload];
        case "DELETE_TRANSACTION":
            let updateState = state.filter(val => val.id !== action.payload)
            return updateState;
        case "UPDATE_TRANSACTION":
            let editableObject = state?.map(val => {
                return val.id === action.payload.id 
            })
            
            let removeObjectArray = state.filter(val => val.id !== action.payload.id)
            editableObject.amount = action.payload.amount;
            editableObject.description = action.payload.description;
            editableObject.id = action.payload.id;
            removeObjectArray.push(editableObject);

     
            return removeObjectArray;
        default:
            return state;
    }



})




export default TransactionReducer;