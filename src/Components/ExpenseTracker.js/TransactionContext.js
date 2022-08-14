import { createContext, useReducer } from "react"
import TransactionReducer from "./TransactionReducer";






const initialTransaction = [
    { description: 'drinks', amount: 400 },
    { description: 'Cash', amount: 2000 },
    { description: 'Cash', amount: 2000 },
    { description: 'Scrape', amount: -200 },
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
                amount:Number(dataTransfer.amount)
            }
        })

    }

    return (
        <TransactionContext.Provider value={{
            transactions: state,
            createTransaction
        }}>
            {
                children
            }

        </TransactionContext.Provider>
    )


}


export default TransactionProvider










