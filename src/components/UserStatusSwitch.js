"use client";
import React, { useState, useEffect } from "react";
import { updateStatus } from "@/app/(adapters)/userAdapter";
const UserStatusSwitch = ({ user }) => {
  const [userStatus, setUserStatus] = useState({ status: user.status || "active" });

  useEffect(() => {
    user.status = userStatus.status;
  }, [userStatus]);

  const handleStatusChange = async (event) => {
    const newStatus = event.target.checked ? "active" : "inactive";
    setUserStatus({ status: newStatus });
    try {
      const responseData = await updateStatus(user.id, newStatus);
      console.log("User updated successfully", responseData);
    } catch (error) {
      console.error("Failed to update user:", error);
    }
  };
  return (
    <label className="switch flex">
      <input
        type="checkbox"
        className="toggle bg-white hover:bg-white"
        style={{
          "--tglbg": userStatus.status === "active" ? "#104EE9" : "#BCCADC80",
          border: userStatus.status === "active" ? "#104EE9" : "border-[#627D98]",
        }}
        checked={userStatus.status === "active"}
        onChange={handleStatusChange}
      />
    </label>
  );
};

export default UserStatusSwitch;
