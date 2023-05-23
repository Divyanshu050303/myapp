import logo from './logo.svg';
import './App.css';
import AddUser from './USER/AddUser';
import UserList from './USER/UserList';
function App() {
  return (
    <div className="App">
       <AddUser/>
       <UserList users={[]}/>
    </div>
  );
}

export default App;
