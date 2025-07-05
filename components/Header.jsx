import React from "react";
import { useClerk } from "@clerk/clerk-react";

const Header = () => {
  const { signOut } = useClerk();

  const handleLogout = () => {
    signOut(); // This signs out the current user
  };

  return (
    <div className="flex justify-between items-center bg-teal-400 h-[80px]">
      <span className="px-3 text-4xl text-white font-serif">
        <h1>Helpdesk</h1>
      </span>
      <ul className="flex gap-3 px-5">
        <img
          src="https://img.icons8.com/?size=100&id=32058&format=png&color=000000"
          alt="icon1"
          width={30}
          height={30}
        />
        <img
          src="https://img.icons8.com/?size=100&id=34105&format=png&color=000000"
          alt="icon2"
          width={30}
          height={30}
        />
        <img
          onClick={handleLogout}
          className="cursor-pointer hover:scale-105 transition"
          src="https://img.icons8.com/?size=100&id=16570&format=png&color=000000"
          alt="logout"
          width={30}
          height={30}
          title="Logout"
        />
      </ul>
    </div>
  );
};

export default Header;
