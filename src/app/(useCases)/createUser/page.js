"use client"
import React from 'react';
import FormUser from "@/components/FormUser";
import BackButton from '@/components/Buttons/BackButton';
import { useRouter } from 'next/navigation'; 
import Footer from '@/components/Footer';
import Navbr from '@/components/Navbr';
import {Toaster,toast} from 'react-hot-toast';
import { createUser } from '@/app/(adapters)/userAdapter';

const createPage = () => {
  const router = useRouter(); 

  const handleCreatePost = async (data) => {
  
    try {
      const response = createUser(data);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div>
      <Navbr/>
      <BackButton />
      <div className="bg-white drop-shadow-lg p-4">
        <h1>Create A New User</h1>
        <div>
          {/* Render the user creation form */}
          <FormUser submit={handleCreatePost} isEditing={false} />
        </div>
      </div>
      <Footer/>
      {/* Toast notifications for displaying success or error messages */}
      <Toaster position="bottom-center"/>
    </div>
  );
}

export default createPage;
