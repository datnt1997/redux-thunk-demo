import React from 'react';

export default function UserList() {
  const userList = [];
  return (
    <div>
      <button>Get Data</button>
      {userList.map(item => (
        <div>
          <div>Name: {item.name}</div>
          <div>Age: {item.age}</div>
        </div>
      ))}
    </div>
  );
}