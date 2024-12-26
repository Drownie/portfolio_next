"use client"

import React, { useContext } from "react";
import Link from "next/link";

import { GlobalContext } from "@/context/global_context";

export default function Footer() {
    const { socialMediaList } = useContext(GlobalContext);

    return (
        <footer className="">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-amber-700 sm:text-center">
                        © 2025 <a href="https://flowbite.com/" className="hover:underline">Drownie</a>. All Rights Reserved.
                    </span>
                    <div className="flex gap-5 mt-4 sm:justify-center sm:mt-0">
                        {
                            socialMediaList.map((socialMediaItem, i) => (
                                <Link key={i} href={socialMediaItem.url} target="__blank" className="text-amber-700 hover:text-amber-500 ms-5">
                                    {socialMediaItem.icon}
                                    <span className="sr-only">{socialMediaItem.name}</span>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </footer>
    );
}