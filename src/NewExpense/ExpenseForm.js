import React,{useState} from 'react'
import './ExpenseForm.css'
const ExpenseForm = (props) => {
    const [title, setTitle]=useState("")
    const [amount, setamount]=useState("")
    const [date, setDate]=useState("")
    // const [input, setInput]=useState({
    //     setTitle:"",
    //     setDate:"",
    //     setAmount:""

    // })
    const chnageValue=(event)=>{
        setTitle(event.target.value)
        // setInput({
        //     ...input,
        //     setTitle:event.target.value,
        // })
    }
    const AmountValue=(event)=>{
         setamount(event.target.value)
        // setInput({
        //     ...input,
        //     setAmount:event.target.value,
        // })
    }
    const DateValue=(event)=>{
         setDate(event.target.value)
        // setInput({
        //     ...input,
        //     setDate:event.target.value,
        // })
    }
    const SumbitHandler=(event)=>{
        event.preventDefault();
        const ExpenseDate={
            title:title,
            amount:+amount,
            date:new Date(date)
        
        }
       props.onSaveExpenseDate(ExpenseDate)
        setDate("");
        setTitle("");
        setamount("")
    }
  return (
    <form onSubmit={SumbitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>title</label>
                <input type="text" value={title} onChange={chnageValue} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={amount} min="0.01" step="0.01" onChange={AmountValue}
                />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={date} min="2019-01-01" step="2023-12-31" onChange={DateValue} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type='submit'>Add Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm
