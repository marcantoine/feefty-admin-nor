import EditIcon from '@/components/icons/EditIcon';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { updateStatus } from '@/app/(adapters)/userAdapter';
import { Flex, Text, Button, Box, Avatar} from '@radix-ui/themes';
const UserCard = ({ user }) => {
  const [userStatus, setUserStatus] = useState({ status: user.status || "active" });

  useEffect(() => {
      user.status=userStatus.status;
  }, [userStatus]); 

  const handleStatusChange = async (event) => {
    const newStatus = event.target.checked ? "active" : "inactive";
    setUserStatus({ status: newStatus });
    try {
      const responseData = await updateStatus(user.id, newStatus);
      console.log('User updated successfully', responseData);
    } catch (error) {
      console.error("Failed to update user:", error);
    }
  };
    return (
      
      <Box className="w-full flex space-x-12 border-b border-custom-border justify-center items-center p-2 relative ">


        <label className="switch flex" >
        <input
          type="checkbox"
          className="toggle bg-white hover:bg-white"
          style={{
            '--tglbg': userStatus.status === "active" ? '#104EE9' : '#BCCADC80',
            'border' : userStatus.status === "active" ? '#104EE9' : 'border-[#627D98]'
          }}
          checked={userStatus.status === "active"}
          onChange={handleStatusChange}
        />
        </label>
    

        <div className="flex-grow justify-start">
          <Text className="grey-900-color block mt-4"size="3" weight="medium">{user.firstName} {user.lastName}</Text> {/* Adjusted to use user prop */}
          <Text className="text-gray-500 block">{user.email}</Text> 
        </div>
    

        <Box className='items-center'>
          <Link href={`/editUser/${user.id}`}> 
            <div className="badge badge-primary badge-outline badge-lg w-11 h-11 rounded-full"> <EditIcon/></div>      
          </Link>
        </Box>
      </Box>
    );
}
  
export default UserCard
