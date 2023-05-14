import { useEffect, useState } from 'react';
import './App.css';

import UserForm from './UserForm';
import UserList from './UserList';

function App() {

  const [users, setUsers] = useState([]);

  const onUserAdd = (user) => {
      setUsers([...users, user]);
  };

  useEffect(()=> {
      console.log(users);
  }, [users])

  return (
    <div className="">
      <UserForm onUserAdd={onUserAdd} />
      <hr />
      <UserList users={users} />
    </div>
  );
}

export default App;
