"use client"

import Link from "next/link";

const menuItems = [
    {
        title: 'About',
        path: '#about'
    },
    {
        title: 'Projects',
        path: '#projects'
    },
    {
        title: 'Contact',
        path: '#contact'
    },
];

export default function Navbar() {
    const RenderNavButton = () => {
        return (
            <div className="flex xl:w-[20%] lg:w-[25%] md:w-[30%] sm:w-[35%] w-[45%] mr-10 justify-around items-center">
                {menuItems.map((menuItem, index) => {
                    return <Link className="font-sans hover:text-amber-700" key={index} href={menuItem.path} scroll={true}>{menuItem.title}</Link>;
                })}
            </div>
        );
    }

    function toggleNavbar(navbarId: string): void {
        console.log(navbarId)
        return
    }

    function openDropdown(dropdownId: string): void {
        console.log(dropdownId)
        return
    }

    return (
        <nav className="shadow-sm shadow-orange-800">
            <div className="w-full h-16 flex justify-between">
                <div className="flex items-center xl:w-[60%] lg:w-[50%] md:w-[40%] sm:w-[30%] w-[30%]">
                    <a href="https://docs.google.com/document/d/1194g2Z5seC2iLJiD6dTDq1EpJX2AREBbD-u-70A8RHw/edit?usp=sharing" target="__blank" className="font-sans md:text-base sm:text-sm text-xs text-amber-50 bg-amber-700 py-1.5 px-2.5 rounded-md xl:ml-32 lg:ml-24 md:ml-16 sm:ml-8 ml-8">
                    <span>Download My CV</span>
                    </a>
                </div>
                <RenderNavButton/>
            </div>
        </nav>
    );
}