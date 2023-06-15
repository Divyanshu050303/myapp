import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import AddUser from './USER/AddUser';
import UserList from './USER/UserList';
function App() {
  const [addData, SetaddData]=useState([])
  const addUserHandler=(userName, userAge)=>{
    SetaddData((preUserList)=>{
      return [...preUserList,{name:userName, age:userAge, id:Math.random().toString()}]
    });
  }
  
  return (
    <div className="App">
       <AddUser onAddUser={addUserHandler}/>
       <UserList users={addData}/>
    </div>
  );
}

export default App;
