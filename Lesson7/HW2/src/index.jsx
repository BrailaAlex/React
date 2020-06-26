import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import UsersList from './UsersList';

const rootElem = document.querySelector("#root");

const users = [
  {
      id: 'id-0',
      age: 21,
      name: 'Bob',
  },
  {
      id: 'id-1',
      age: 17,
      name: 'Tom',
  },
  {
      id: 'id-2',
      age: 18,
      name: 'Tad',
  },
  {
      id: 'id-3',
      age: 45,
      name: 'Sam',
  },
  {
      id: 'id-4',
      age: 25,
      name: 'Ad',
  },
  {
      id: 'id-5',
      age: 31,
      name: 'Kate',
  },
  {
      id: 'id-6',
      age: 52,
      name: 'Brad',
  },
  {
      id: 'id-7',
      age: 42,
      name: 'Samanta',
  },
  {
      id: 'id-8',
      age: 52,
      name: 'Brad',
  },
  {
      id: 'id-9',
      age: 42,
      name: 'Samanta',
  },
];

ReactDOM.render(<UsersList users={users} />, rootElem);
