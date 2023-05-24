import React from 'react'
import Card from '../UI/Card'
import Userlist from './UserList.module.css'
const UserList = (props) => {
  return (
    <div>
    <Card ClassName={Userlist.users}>
      <ul>
        {props.users.map((user) =>( 
            <li>
            
                {user.name} ({user.age} year old)
            </li>
        ))}
      </ul>
      </Card>
    </div>
  )
}

export default UserList
