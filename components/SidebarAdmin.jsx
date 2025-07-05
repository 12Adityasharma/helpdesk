import React from "react";
import Header from "./Header";

const SidebarAdmin = () => {
  return (
    <>
     <div className="relative"> <Header />
      <div className="flex min-h-[calc(100vh-80px)]">
        {/* Sidebar */}
        <div className="bg-neutral-400 w-[249px] p-6">
          <ul className="flex flex-col gap-6 text-2xl font-semibold">
            <li className="flex items-center gap-3">
              <img
                src="https://img.icons8.com/?size=100&id=60&format=png&color=000000"
                alt=""
                width={24}
                height={24}
              />
              Dashboard
            </li>
            <li className="flex items-center gap-3">
              <img
                src="https://img.icons8.com/?size=100&id=GmQz8L8WqPv5&format=png&color=000000"
                alt=""
                width={24}
                height={24}
              />
              Manage Tickets
            </li>
            <li className="flex items-center gap-3">
              <img
                src="https://img.icons8.com/?size=100&id=12580&format=png&color=000000"
                alt=""
                width={24}
                height={24}
              />
              All Users
            </li>
          </ul>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6 bg-white">
          <div className="text-2xl font-semibold text-gray-700">
            Admin Content Area
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-teal-400 h-[50px] w-[1287px] flex items-center justify-center text-white font-semibold absolute right-0 bottom-0">
        Admin Footer
      </div>
      </div>
    </>
  );
};

export default SidebarAdmin;
