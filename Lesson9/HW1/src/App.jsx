import React from 'react';
import ReactDOM from 'react-dom';
import UsersList from './UsersList';

const users = [
  {
    id: "id-0",
    name: "Bob",
    age: 27
  },
  {
    id: "id-1",
    name: "Nick",
    age: 37
  },
  {
    id: "id-2",
    name: "Bob",
    age: 22
  },
  {
    id: "id-3",
    name: "Tom",
    age: 20
  },
  {
    id: "id-4",
    name: "Helen",
    age: 20
  }
];

const App = () => {
  return (
    <UsersList users={users} />
  )
};

export default App;