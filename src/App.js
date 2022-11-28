import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseData from './components/ExpenseData';

function App()
{
    let [expenses,updateExpenses]=useState([{title:"College Fees",price:"$288"}]);
    function getExpenses(expensesdata)
    {
       updateExpenses([...expenses,...expensesdata])
    }

    return(
        <>
            <h1 style={{textAlign:'center'}}>EXPENSE TRACKER</h1>
            <ExpenseForm getdata={getExpenses}/>
            <ExpenseData expenseData={expenses}/>
        </>
    )
}

export default App;