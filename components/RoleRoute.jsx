"use client"
import React from "react";
import { useUser } from "@clerk/clerk-react";

const RoleRoute = ({ allowedRoles, children }) => {
  const { user, isLoaded } = useUser();

  if (!isLoaded) return <div>Loading...</div>;

  const role = user?.publicMetadata?.role;

  if (!allowedRoles.includes(role)) {
    return <div className="p-4 text-red-500 font-semibold">🚫 Access Denied</div>;
  }

  return children;
};

export default RoleRoute;
