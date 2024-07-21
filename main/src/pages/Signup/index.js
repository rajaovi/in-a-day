import React from 'react';
import { useSelector } from 'react-redux';

const Signup = () => {
  const users = useSelector((state) => state.Test.users);
  console.log('Users', users);
  return (
    <div>
      <h2>Signup - API User Test</h2>
      <table>
        <tr>
          <th>Name</th>
          <th>Username</th>
        </tr>
        {users?.map((item, ind) => {
          return (
            <tr key={ind}>
              <td>{item?.name}</td>
              <td>{item?.username}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Signup;
