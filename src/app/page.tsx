'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from "next/navigation"
import Image from "next/image";
import Sidebar from '../components/Sidebar'
import Forum from '../components/Forum'
import Stories from '../components/Stories'

export default function Home() {
    const pathname = usePathname()
    const [selected, setSelected] = useState("Forum")

    const toggleComponent = (component: string) => {
        setSelected(component);
    }
    return (
        <main>
            <button className="lg:hidden grid grid-cols-2 bg-[#1C2541] w-full text-white text-lg font-semibold h-12 place-items-center justify-center">
                <p
                    className={`${selected === 'Forum' ? 'bg-[#141D2C] w-full h-full border-b-4 border-red-800 flex items-center justify-center' : ''}`}
                    onClick={() => toggleComponent('Forum')}
                >
                    Discussion Forum
                </p>
                <p
                    className={`${selected === 'Stories' ? 'bg-[#141D2C] w-full h-full border-b-4 border-red-800 flex items-center justify-center' : ''}`}
                    onClick={() => toggleComponent('Stories')}
                >
                    Market Stories
                </p>
            </button>
            <div className="flex lg:gap-4 h-screen overflow-hidden">
                    <Sidebar />
                <div className="flex w-full lg:hidden">
                    {selected === 'Forum' && <Forum />}
                    {selected === 'Stories' && <Stories />}
                </div>
                <div className="lg:flex w-full hidden gap-10">
                    <Forum />
                    <Stories />
                </div>
            </div>
        </main>
    );
}


