"use client"

import { useContext } from "react";
import { GlobalContext } from "@/context/global_context";

export default function About() {
    const { aboutText, techStackList } = useContext(GlobalContext);

    return (
        <>
            {/* About Text */}
            <div id="about" className="flex min-h-48 md:flex-row flex-col justify-center items-center text-white gap-3 py-3 px-14">
                <span className="text-4xl font-sans font-semibold text-amber-700 align-middle md:text-left text-center md:w-fit md:min-w-44 w-full">
                    <span className="underline" >About</span> Me
                </span>
                <span className="w-full text-justify font-medium">
                    {aboutText}
                </span>
            </div>

            {/* Tech Stack */}
            <div id="about" className="flex flex-col justify-center items-center text-white gap-3 py-3 px-14">
                <span className="text-4xl font-sans font-semibold text-amber-700 align-middle text-center w-full">
                Tech <span className="underline">Stacks</span>
                </span>
                <span className="flex justify-center flex-wrap gap-5 border-4 rounded-xl py-3 px-5 w-1/2 border-amber-700">
                    {techStackList.map((techStackItem, i) => (
                        <span className="flex text-[4.5rem]" key={i}>
                            {techStackItem.icon}
                        </span>
                    ))}
                </span>
            </div>
        </>
    );
}