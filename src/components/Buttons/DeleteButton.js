"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import toast from "react-hot-toast"
function DeleteButton({ id }) { // Accept ID as a prop

  const router = useRouter()
  const handleDelete = async (event) => {
    event.preventDefault(); // Prevents the form from submitting
    try {
      const response = await fetch(`/api/user/${id}`, {
        method: 'DELETE', 
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json(); 
      toast.success("user deleted successfully");
      router.push('/');
      
    } catch (error) {
      toast.error("Failed to delete user");
      router.push('/');
    }
  };

  return (
    <div>
      <button className=" rounded-sm border border-red-500 text-white bg-red-500 px-4 py-2 mt-10" onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default DeleteButton;
