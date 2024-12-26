"use client"

import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaExternalLinkAlt } from 'react-icons/fa';

import { GlobalContext } from "@/context/global_context";

export default function Navbar() {
    const { navbarList, cvUrl } = useContext(GlobalContext);

    return (
        <nav className="px-14 py-5 flex justify-between items-center text-white text-base">
            <Link href="#" className="flex gap-3 items-center font-bold cursor-pointer">
                <Image
                    src="/images/logo.png" alt="dro. logo"
                    width={40} height={40} 
                    // sizes="(max-width: 20px) 20px, (max-width: 20px) 20px" 
                    style={{ objectFit: 'cover' }} priority
                />
                DROWNIE.NET
            </Link>

            <ul className="flex gap-8 px-8 py-3 rounded-3xl font-semibold" style={{backgroundColor: 'rgba(255, 255, 255, 0.5)'}}>
                {
                    navbarList.map((navbarItem, i) => (
                        <li key={i} className="hover:text-orange-700">
                            <Link href={navbarItem.path} scroll >{navbarItem.title}</Link>
                        </li>
                    ))
                }
            </ul>

            <Link 
                href={cvUrl}
                target="_blank"
                className="bg-white text-amber-900 flex gap-3 justify-center items-center px-4 py-3 rounded-3xl font-medium"
            >
                Open My CV 
                <span className="text-sm">
                    <FaExternalLinkAlt />
                </span>
            </Link>
        </nav>
    );
}