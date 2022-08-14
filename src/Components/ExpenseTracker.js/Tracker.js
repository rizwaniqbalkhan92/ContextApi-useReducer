import React from 'react'
import ExpenseTracker from './ExpenseTracker'
import TransactionProvider from './TransactionContext'

const Tracker = () => {
    return (
        <TransactionProvider>
            <ExpenseTracker />
        </TransactionProvider>
    )
}

export default Tracker