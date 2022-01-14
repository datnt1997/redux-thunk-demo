import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { fetchUsers } from './slice';

export default function UserList() {
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.users);


  const getSampleData = () => {
    dispatch(fetchUsers());
  }

  return (
    <div>
      <button onClick={getSampleData}>Get Data</button>
      {!!userList ? userList.map((item, index) => (
        <div key={index}>
          <div>Name: {item.name}</div>
          <div>Age: {item.age}</div>
        </div>
      ))
        : <></>}
    </div>
  );
}