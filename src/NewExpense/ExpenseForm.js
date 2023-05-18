import React,{useState} from 'react'
import './ExpenseForm.css'
const ExpenseForm = () => {
    // const [title, setTitle]=useState("")
    // const [amount, setamount]=useState("")
    // const [date, setDate]=useState("")
    const [input, setInput]=useState({
        setTitle:"",
        setDate:"",
        setAmount:""

    })
    const chnageValue=(event)=>{
        setInput({
            ...input,
            setTitle:event.target.value,
        })
    }
    const AmountValue=(event)=>{
        //  setamount(event.target.value)
        setInput({
            ...input,
            setAmount:event.target.value,
        })
    }
    const DateValue=(event)=>{
        //  setDate(event.target.value)
        setInput({
            ...input,
            setDate:event.target.value,
        })
    }
  return (
    <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>title</label>
                <input type="text" onChange={chnageValue} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" onChange={AmountValue}
                />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" step="2023-12-31" onChange={DateValue} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type='submit'>Add Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm
