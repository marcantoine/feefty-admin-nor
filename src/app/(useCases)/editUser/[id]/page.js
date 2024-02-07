"use client"
import React, { useEffect, useState } from 'react';
import FormUser from '@/components/FormUser';
import BackButton from '@/components/Buttons/BackButton';
import DeleteButton from '@/components/Buttons/DeleteButton'; 
import { getUser,updateUser } from '@/app/(adapters)/userAdapter';
import {Text} from '@radix-ui/themes'
import Footer from '@/components/Footer';
import Navbr from '@/components/Navbr';
import {Toaster} from 'react-hot-toast';
const EditPostPage = ({params}) => {
  const  id  = params.id; // Destructure id from the URL
  const [userData, setUserData] = useState(null); // State to store the user data

  useEffect(() => {
    const fetchUserData = async () => {
      if (id) { 
        try {
          const data = await getUser(id);
          setUserData(data); 
        } catch (error) {
          console.error("Failed to fetch user data:", error);
        }
      }
    };

    fetchUserData();
  }, [id]); 

  const handleEditUser = async (data) => {
    try {
      
      const responseData = await updateUser(id, data);
      console.log('User updated successfully', responseData);
      
    } catch (error) {
      console.error("Failed to update user:", error);
    }
  };
  return (
    <div>
      <Navbr/>
      <BackButton />
      <div className="bg-white drop-shadow-lg p-4 h-180">
        {userData && <Text size="3" weight="bold">Edit {userData.firstName} {userData.lastName}</Text>}
        {/* Only render FormUser if userData is not null */}
        {userData && <FormUser submit={handleEditUser} userData={userData} isEditing={true} />}
      </div>
      <Footer/>
      <Toaster position="bottom-center"/>
    </div>
  );
};

export default EditPostPage;
