import React ,{useState} from 'react'
import Card from '../UI/Card';
import Button from '../UI/Button';
import addUserCss from './AddUser.module.css'
import UserList from './UserList';
const AddUser = () => {
  const [addUser, SetAddUser] =useState('');
  const [addAge, SetAddAge] =useState('');
    const addUserHandler=(event) => {
        event.preventDefault();
        if(addUser.trim().length === 0 || addAge.trim().length ===0){
          return
        }
        if(+addAge<1){
          return
        }
        SetAddUser('');
        SetAddAge('');
    }
  const userNameChangeHandler=(event) => {
    SetAddUser(event.target.value)
  }
  const userAgeChangeHandler=(event) => {
    SetAddAge(event.target.value)
  }
  return (
    <Card className={addUserCss.input}>
    <form onSubmit={addUserHandler }>
        <label htmlFor="userName">UserName</label>
        <input id="userName"type="text" value={addUser} onChange={userNameChangeHandler}/>
        <label htmlFor="userAge">Age</label>
        <input id="userAge"type="number" value={addAge} onChange={userAgeChangeHandler} />
        <Button type='submit'>Add user</Button>
    </form>
 
</Card>
  )
}

export default AddUser
