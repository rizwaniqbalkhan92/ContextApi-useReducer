const TransactionReducer = ((state, action) => {

    // console.log(s);
    switch (action.type) {
        case "CREATE_TRANSACTION":
            return [...state, action.payload];
        default:
            return state;
    }



})




export default TransactionReducer;