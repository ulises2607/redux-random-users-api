import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, selectUsers } from '../store/users/usersSlice';

const UserList = () => {
  const dispatch = useDispatch();
  const { users, isLoading, error } = useSelector(selectUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);


  if (isLoading) {
    return <p>Loading...</p>;
  }

 
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>
          {user.name?.first} {user.name?.last}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
