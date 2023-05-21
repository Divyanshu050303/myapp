import React ,{useState}from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

 

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  const onSaveExpenseDateHandler=(EnteredExpenseData)=>{
    const Expense={
      ...EnteredExpenseData,
      id:Math.random()
    }
    props.onAdd(Expense);
    setIsEditing(false);
  }
  return (
    <div className='new-expense'>
     {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
      <ExpenseForm onSaveExpenseDate={onSaveExpenseDateHandler} onCancle={stopEditingHandler}/>
      )}
    </div>
  )
}

export default NewExpense
