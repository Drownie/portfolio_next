"use client"

import { useEffect, useState } from "react"

export default function NavbarNew() {
    const [hash, setHash] = useState('#');

    const menuItems = [
        {
            title: 'Home',
            path: '#'
        },
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

    return (
        <nav className="bg-amber-700 border-amber-50">
            <div className="flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-bold whitespace-nowrap text-amber-50 uppercase">drownie.net</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex text-amber-50 items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-amber-50 hover:text-orange-700 focus:outline-none focus:ring-2 focus:ring-amber-50" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-amber-50 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        {
                            menuItems.map((menuItem: any, index) => {
                                return (
                                    <li key={index}>
                                        <a 
                                            href={menuItem['path']} 
                                            className={menuItem['path'] == hash ? 
                                                "block py-2 px-3 text-orange-200 rounded" : 
                                                "block py-2 px-3 text-amber-50 rounded hover:text-amber-700 hover:bg-amber-50"}
                                            aria-current="page">
                                            {menuItem['title']}
                                        </a>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}