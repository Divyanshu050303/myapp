import React ,{useState} from 'react'
import Card from '../UI/Card';
import Button from '../UI/Button';
import addUserCss from './AddUser.module.css'
import UserList from './UserList';
import ErrorModal from '../UI/ErrorModal';
const AddUser = (props) => {
  const [addUser, SetAddUser] =useState('');
  const [addAge, SetAddAge] =useState('');
  const [error, Seterror] = useState();
    const addUserHandler=(event) => {
        event.preventDefault();
        if(addUser.trim().length === 0 || addAge.trim().length ===0){
          Seterror({
            title: 'invalid input',
            message:'Please enter a valid name and age.'
          })
          return
        }
        if(+addAge<1){
          Seterror({
            title: 'invalid Age',
            message:'Please enter a valid age (> 0).'
          })
          return
        }
        props.onAddUser(addUser, addAge);
        SetAddUser('');
        SetAddAge('');
    }
  const userNameChangeHandler=(event) => {
    SetAddUser(event.target.value)
  }
  const userAgeChangeHandler=(event) => {
    SetAddAge(event.target.value)
  }

  const errorHandler=() => {
    Seterror(null);
  }
  return (<>
    {error && <ErrorModal title={error.title} message={error.message} onHandlerError={errorHandler}/>}
    <Card className={addUserCss.input}>
    <form onSubmit={addUserHandler }>
        <label htmlFor="userName">UserName</label>
        <input id="userName"type="text" value={addUser} onChange={userNameChangeHandler}/>
        <label htmlFor="userAge">Age</label>
        <input id="userAge"type="number" value={addAge} onChange={userAgeChangeHandler} />
        <Button type='submit'>Add user</Button>
    </form>
 
</Card>
</>
  )
}

export default AddUser
