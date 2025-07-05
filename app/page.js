'use client';
import { useUser, SignedIn, SignedOut, SignIn } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAssignUserRole from "../hooks/useAssignUserRole";

export default function Home() {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  useAssignUserRole();

  useEffect(() => {
    if (isLoaded && user) {
      const role = user.publicMetadata?.role;
      console.log("🔍 Redirecting to role:", role);
      if (role === "admin") router.replace("/admin");
      else if (role === "user") router.replace("/user");
    }
  }, [user, isLoaded, router]);

  return (
    <>
      <SignedOut>
        <SignIn routing="hash" />
      </SignedOut>
      <SignedIn>
        <div className="text-center mt-10 text-gray-500">Loading Dashboard...</div>
      </SignedIn>
    </>
  );
}
