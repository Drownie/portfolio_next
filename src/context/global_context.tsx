"use client"

import { navbarItemType, socialMediaItemType, techStackType } from "@/utils";
import React, { createContext } from "react";

import { 
    FaLinkedin,
    FaGithub,
    FaInstagram,
    FaDev,
    FaMedium,

    FaReact,
    FaJs,
    FaPython,
    FaAndroid,
    FaDocker,
} from 'react-icons/fa';

type generalContextProps = {
    aboutText: string,
    techStackList: techStackType[],
    socialMediaList: socialMediaItemType[],
    navbarList: navbarItemType[],
    cvUrl: string,
};

const defaultGeneralContextProps: generalContextProps = {
    aboutText: "Full Stack Developer with over 2 year of experience in designing, developing, and deploying web and mobile applications. Proven track record in building scalable projects, including a notable application. Adept at both front-end and back-end development, ensuring seamless integration and robust functionality across the technology stack. Committed to delivering high-quality code and exceptional user experiences.",
    techStackList: [
        {
            icon: <FaReact/>,
            alt: "React"
        },
        {
            icon: <FaJs/>,
            alt: "Javascript"
        },
        {
            icon: (
                <i className='bx bxl-typescript' ></i>
            ),
            alt: "Typescript"
        },
        {
            icon: <FaPython/>,
            alt: "Python"
        },
        {
            icon: (
                <i className='bx bxl-flutter h-fit'></i>
            ),
            alt: "Flutter"
        },
        {
            icon: (
                <i className='bx bxl-postgresql' ></i>
            ),
            alt: "PostgreSQL"
        },
        {
            icon: <FaAndroid/>,
            alt: "Android"
        },
        {
            icon: (
                <i className='bx bxl-firebase' ></i>
            ),
            alt: "PostgreSQL"
        },
        {
            icon: <FaDocker/>,
            alt: "Docker"
        },
        {
            icon: (
                <i className='bx bxl-spring-boot' ></i>
            ),
            alt: "SpringBoot"
        },
    ],
    // style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
    socialMediaList: [
        {
            icon: <FaLinkedin />,
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/abraham-mahanaim/",
        },
        {
            icon: <FaGithub />,
            name: "GitHub",
            url: "https://github.com/Drownie/",
        },
        {
            icon: <FaInstagram />,
            name: "Instagram",
            url: "https://www.instagram.com/abraham.mahanaim/",
        },
        {
            icon: <FaDev />,
            name: "Dev.to",
            url: "https://dev.to/drownie"
        },
        {
            icon: <FaMedium />,
            name: "Medium",
            url: "https://medium.com/@drowniedev"
        },
    ],
    navbarList: [
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
    ],
    cvUrl: "https://docs.google.com/document/d/1194g2Z5seC2iLJiD6dTDq1EpJX2AREBbD-u-70A8RHw/edit?usp=sharing",
};

export const GlobalContext = createContext<generalContextProps>(defaultGeneralContextProps);
export const GlobalContextProvider = ({children}: { children: React.ReactNode }) => {

    return (
        <GlobalContext.Provider value={defaultGeneralContextProps}>
            {children}
        </GlobalContext.Provider>
    );
}