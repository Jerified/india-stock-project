'use client'

import { useState } from "react";
import { MdPlayArrow } from 'react-icons/md'
import { FaUser, FaBell } from "react-icons/fa"
const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Discussion Forum", src: "Chart_fill" },
        { title: "Market Stories", src: "Chat" },
        { title: "Sentiment", src: "User", gap: true },
        { title: "Market ", src: "Calendar" },
        { title: "Sector", src: "Search" },
        { title: "Watchlist", src: "Chart" },
        { title: "Events ", src: "Folder", gap: true },
        { title: "News/Interview", src: "Setting" },
    ];

    return (
        <aside className="flex min-h-screen fixed lg:relative">
            <div
                className={` ${open ? "w-72" : "w-0 "
                    } bg-blue-900 h-screen  text-white  pt-8 relati duration-300 `}
            >

                {/* <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        /> */}
                <div className="w-full ">
                    <div
                        className={`text-white w-full flex justify-between origin-left font-medium text-xl duration-200  px-5
                ${!open && "scale-0"
                            }
                `}
                    >
                        <div className="flex gap-2 items-center">
                            <FaUser className="text-white text-3xl rounded-full" />
                            <p className="text-sm">Hello, User</p>
                        </div>
                        <div>
                            <FaBell className="text-3xl" />
                        </div>
                    </div>
                    <div className="ring-1 ring-gray-200 mt-6 mb-3" />
                    <ul className="pt-2 p-5">
                        {Menus.map((Menu, index) => (
                            <li
                                key={index}
                                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white  text-sm items-center gap-x-4 
                ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"
                                    } `}
                            >
                                {/* <img src={`./src/assets/${Menu.src}.png`} /> */}
                                <span className={`${!open && "hidden"} origin-left duration-200`}>
                                    {Menu.title}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="flex justify-center items-center min-h-screen ">
                <div className='py-8'>
                    <MdPlayArrow className="bg-blue-800  cursor-pointer text-white text-xl " onClick={() => setOpen(!open)} />
                </div>
            </div>
        </aside>
    );
};
export default Sidebar;