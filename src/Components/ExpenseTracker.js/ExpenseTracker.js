import React, { useContext, useState } from 'react'
import { TransactionContext } from './TransactionContext';

const ExpenseTracker = () => {
    let { transactions, createTransaction ,delTransaction,upateTransaction} = useContext(TransactionContext);

    console.log(transactions)
    const [amount, setAmount] = useState(0);
    const [expenseName, setExpenseName] = useState('');
    function handleChange(e) {
        e.preventDefault();
    }

    const createNewTransaction = () => {
        if(Number(amount)===0 || !Number(amount)){
            alert("PLEASE ENTER CORRECT VALUE (i.e) 1,2,3");
            return false;
        }
        const dataTransfer = {
            description: expenseName,
            amount: amount
          
        }
        console.log(dataTransfer)
        createTransaction(dataTransfer)

    }
    const upTransaction = (old_id) => {
            const amount=+prompt('Pleaase Enter Ediable value');
            const description=prompt('Pleaase Enter Ediable description');
        if(Number(amount)===0 || !Number(amount)){
            alert("PLEASE ENTER CORRECT VALUE (i.e) 1,2,3");
            return false;
        }
        const dataTransfer = {
            description: description,
            amount: amount
          
        }
        console.log(dataTransfer)
        upateTransaction(dataTransfer,old_id)

    }
const deleteTransaction=(id)=>{

    delTransaction(id)

}
function income(){
    let incomeAmount=0;
    for(let i=0; i<transactions?.length; i++){
        if(transactions[i]?.amount >0) {
            incomeAmount = incomeAmount+ transactions[i].amount;
      
        }
        
        
    }
    return incomeAmount;
}
function expense(){
    let expenseAmount=0;
    for(let i=0; i<transactions?.length; i++){
        if(transactions[i]?.amount < 0) {
            expenseAmount = expenseAmount- transactions[i].amount;
     
        }
        
        
    }
    return expenseAmount;
}


    return (
        <div>
            <h1>Expense Tracker</h1>
            <div>
                <form onSubmit={handleChange} >
                    <h2>BALANCE: {income()-expense()}</h2>
                        <h2>INCOME : {income()}</h2>
                        <h2>EXPENSE : {`- ${expense()}`}</h2>
                    <input placeholder='Enter Amount' onChange={(e) => setAmount(e.target.value)} />
                    <br /> <input placeholder='Enter Expense name ' onChange={(e) => setExpenseName(e.target.value)} />
                    <br /> <button onClick={() => createNewTransaction()} >Add Trasaction</button>
                    <div>
                        {
                            transactions?.map((val, index) => (
                                <li key={index}>
                                    <p>{val.amount}</p>
                                    <p>{val.description}</p>
                                    <button onClick={()=>deleteTransaction(val?.id)}>del</button>
                                    <button onClick={()=>upTransaction(val?.id)}>edit</button>

                                </li>
                            ))
                        }
                    </div>

                </form>
            </div>

        </div>
    )
}

export default ExpenseTracker