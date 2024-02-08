// Adapter Functions for API Interaction
// This file contains functions to interact with various user-related API endpoints.

import { toast } from "react-hot-toast";

/**
 * Creates a new user through the Prisma API.
 * @param {Object} data - The user data for creation.
 */
async function createUser(data) {
  try {
    const response = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    toast.success(result.message);
  } catch (error) {
    toast.error("Error creating user:", error.message);
  }
}

/**
 * Updates an existing user's information through the Prisma API.
 * @param {string} id - The ID of the user to be updated.
 * @param {Object} data - The user's data.
 */
async function updateUser(id, data) {
  try {
    const response = await fetch(`/api/user/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    toast.success(responseData.message);
  } catch (error) {
    toast.error("Failed to update user:", error.message);
  }
}

/**
 * Fetches a specific user's data from the Prisma API.
 * @param {string} id - The ID of the user to be fetched.
 * @returns {Promise<Object>} A promise that resolves to the user data.
 */
async function getUser(id) {
  try {
    const response = await fetch(`/api/user/${id}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch user data:", error);
    toast.error("Failed to fetch user data");
  }
}

/**
 * Deletes a user through the prisma API.
 * @param {string} userId - The ID of the user to be deleted.
 */
async function deleteUser(userId) {
  try {
    const response = await fetch(`/api/user/${userId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (data.status === 200) toast.success(data.message);
    useRouter.push("/");
  } catch (error) {
    toast.error("Failed to delete user:", error.message);
    useRouter.push("/");
  }
}

/**
 * Updates the activation status of a user through the API.
 * @param {string} userId - The ID of the user to be updated.
 * @param {string} newStatus - The new activation status.
 */
async function updateStatus(userId, newStatus) {
  try {
    const response = await fetch(`/api/activestatus/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: newStatus,
      }),
    });
    const responseData = await response.json();
    toast.success(responseData.message);
  } catch (error) {
    console.error("Failed to update user:", error);
  }
}

export { createUser, updateUser, getUser, deleteUser, updateStatus };
