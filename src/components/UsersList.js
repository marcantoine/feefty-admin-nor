"use client"
import React, { useEffect, useState } from 'react';
import UserCard from '@/components/UserCard'; // Make sure the path is correct
import { getUsers } from '@/app/(adapters)/userAdapter'; 
const UsersList = () => {
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        setError(error.message); 
      }
    };

    fetchUsers();
  }, []);


  if (error) return <div className="bg-white drop-shadow-lg py-6 px-4 xs:rounded-xl">
            <p className="text-center text-gray-600 font-medium">Oh well...</p>
            <p className="text-center text-gray-600 font-normal">
              Looks like there are no users here yet.
              <br />
              Add a new user to see it here!
            </p>
          </div>;
  if (!users) return <div className="bg-white drop-shadow-lg py-6 px-4 xs:rounded-xl">
                      <p className="text-center text-gray-600 font-medium">Loading...</p></div>;

  return (
    <div className="w-full p-0 m-0">
      {users.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
    </div>
  );
};

export default UsersList;
