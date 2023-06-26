import React from 'react';
import Input from '../../Ui/Input1';
import classes from './MealItemForm.module.css'
const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input label="Amount" input={{
        id:"amount"+props.id,
        type:"number",
        min:1,
        max:5,
        step:'1',
        defaultValue:'1',
      }}
      /> 
      <button>+ Add</button>
    </form>
  )
}

export default MealItemForm
