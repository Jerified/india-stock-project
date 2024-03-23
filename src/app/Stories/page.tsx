'use client'

import { useState } from 'react'
import Image from "next/image";
import Stories from '../../components/Stories'

export default function Home() {
    return (
        <main>
            <div className="">
                <Stories />
            </div>
        </main>
    );
}



