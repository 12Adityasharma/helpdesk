import React from "react";
import Header from "./Header";
const Sidebar = () => {
  return (
   <> 
   <Header/> 
   <div className="relative"><div className="flex ">
      <div className="bg-neutral-400 w-[249px] h-[900px]">
        <ul className="flex flex-col gap-6 pt-6 pl-8 text-2xl font-semibold">
          <li className="flex gap-3">
            <img
              src="https://img.icons8.com/?size=100&id=60&format=png&color=000000"
              alt=""
              width={20}
              height={20}
            />
            <img
              width={20}
              height={20}
              src="https://img.icons8.com/?size=100&id=yBugi9w42EET&format=png&color=000000"
              alt=""
            />
            Dashboard
          </li>
          <li className="flex gap-2.5 pl-8">
            <img
              width={20}
              height={20}
              src="https://img.icons8.com/?size=100&id=63162&format=png&color=000000"
              alt=""
            />
            New Ticket
          </li>
          <li className="flex gap-2.5 pl-8">
            <img
              width={20}
              height={20}
              src="https://img.icons8.com/?size=100&id=rbss3t1by8bG&format=png&color=000000"
              alt=""
            />
            My Ticket
          </li>
        </ul>
      </div>
      <div className=" w-[1300px]">content</div>
    </div>
    <div className="bg-teal-400 h-[50px] w-full ml-[16%] absolute bottom-[0%]">footer</div></div></>
  );
};

export default Sidebar;
