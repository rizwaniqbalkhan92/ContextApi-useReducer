import { createContext, useReducer } from "react"
import TransactionReducer from "./TransactionReducer";






const initialTransaction = [

]


export const TransactionContext = createContext(initialTransaction);

 const TransactionProvider = ({ children }) => {
    const [state, dispatch] = useReducer(TransactionReducer, initialTransaction);

    function createTransaction(dataTransfer) {
        // console.log(dataTransfer)
        dispatch({
            type:"CREATE_TRANSACTION",
            payload:{
                description:dataTransfer.description,
                amount:Number(dataTransfer.amount),
                id:new Date().getTime()
            }
        })

    }
    function delTransaction(id) {
        // console.log(dataTransfer)
        dispatch({
            type:"DELETE_TRANSACTION",
            payload:id
        })

    }

    return (
        <TransactionContext.Provider value={{
            transactions: state,
            createTransaction,
            delTransaction
        }}>
            {
                children
            }

        </TransactionContext.Provider>
    )


}


export default TransactionProvider










