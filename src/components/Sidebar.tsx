'use client'

import { useState } from "react";
import { MdPlayArrow } from 'react-icons/md'
import { FaUser, FaBell } from "react-icons/fa"
import { BiMessageDetail } from "react-icons/bi"
import { SiBitcoincash } from "react-icons/si"
import { IoMdArrowDropdown } from "react-icons/io"	

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  interface Menu {
    title: string;
    src: React.ReactElement | string;
    arrow?: React.ReactElement
  }

  const Menus: Menu[] = [
    { title: "Discussion Fourm", src: <BiMessageDetail />, arrow: <IoMdArrowDropdown /> },
    { title: "Market Stories", src: <SiBitcoincash /> },
    { title: "Sentiment", src: '' },
    { title: "Market", src: '' },
    { title: "Sector", src: '' },
    { title: "Watchlist", src: '' },
    { title: "Events", src: '' },
    { title: "News/Interview", src: '' },
  ];

  return (
    <aside className="flex min-h-screen fixed top-0 z-10 lg:relative">
      <div
        className={`${
          open ? "w-72" : "w-0"
        } bg-[#1C2541] text-white pt-8 duration-300`}
      >
        <div className="w-full">
          <div
            className={`text-white w-full flex justify-between origin-left font-medium text-xl duration-200 px-5
                ${!open && "scale-0"}
            `}
          >
            <div className="flex gap-2 items-center">
              <FaUser className="text-white text-3xl rounded-full" />
              <p className="text-sm">Hello, User</p>
            </div>
            <div className="relative">
              <FaBell className="text-3xl" />
              <div className="text-xl bg-red-800 rounded-full w-2 h-2 absolute top-1 animate-pulse right-1" />
            </div>
          </div>
          <div className="ring-1 ring-gray-200 mt-6 mb-3" />
          <ul className="pt-4">
            {Menus.map((Menu, index) => (
              <li
                key={index}
                className={`flex-md p-2 cursor-pointer hover:bg-light-white text-md items-center gap-10 ${
                  index === 0 ? "bg-black/50 w-full px-5 py-3" : "px-5 py-3"	
                } ${!open && "scale-0"}`}
              >
                <span
                  className={`${!open && "hidden"} flex justify-between items-center origin-left duration-200`}
                >
                    <div className="flex gap-2 items-center">
                        <p className="text-2xl">
                            {Menu.src}
                        </p>
                        <p>
                            {Menu.title}
                        </p>
                    </div>
                    <p>{Menu.arrow}</p>

                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-[#1C2541]  py-12">
          <MdPlayArrow
            className=" cursor-pointer text-white text-xl"
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;