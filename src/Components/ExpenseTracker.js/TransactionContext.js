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
    function upateTransaction(updateData,old_id) {
        // console.log(dataTransfer)
        dispatch({
            type:"UPDATE_TRANSACTION",
            payload:{
                description:updateData.description,
                amount:Number(updateData.amount),
                id:old_id
            }
        })

    }

    return (
        <TransactionContext.Provider value={{
            transactions: state,
            createTransaction,
            delTransaction,
            upateTransaction
        }}>
            {
                children
            }

        </TransactionContext.Provider>
    )


}


export default TransactionProvider










