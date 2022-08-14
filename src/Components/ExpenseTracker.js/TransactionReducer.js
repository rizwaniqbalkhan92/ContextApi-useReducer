const TransactionReducer = ((state, action) => {

    // console.log(s);
    switch (action.type) {
        case "CREATE_TRANSACTION":
            return [...state, action.payload];
        case "DELETE_TRANSACTION":
            let updateState=state.filter(val=>val.id !== action.payload)
            return updateState;
        default:
            return state;
    }



})




export default TransactionReducer;