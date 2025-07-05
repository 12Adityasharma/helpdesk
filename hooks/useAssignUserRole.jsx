"use client";
import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";

const useAssignUserRole = () => {
  const { user, isSignedIn } = useUser();

  useEffect(() => {
    const assignRole = async () => {
      if (!isSignedIn || !user) return;

      const role = user.publicMetadata?.role;
      console.log("Current user role:", role);

      if (!role) {
        try {
          const res = await fetch("/api/set-role", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userId: user.id,
              email: user.primaryEmailAddress?.emailAddress,
            }),
          });

          const data = await res.json();
          if (data.success) {
            console.log(`✅ Role set to: ${data.role}`);
            window.location.reload();
          } else {
            console.error("❌ Backend error:", data.error);
          }
        } catch (err) {
          console.error("❌ Failed to call /api/set-role:", err);
        }
      }
    };

    assignRole();
  }, [user, isSignedIn]);
};

export default useAssignUserRole;
