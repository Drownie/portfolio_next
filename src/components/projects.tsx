"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface projectSchema {
    id: number;
    title: string;
    short_description: string;
    redirect_url: string;
    tags: string[];
}

const Projects = () => {
  const [projects, setProjects] = useState<projectSchema[]>([]);

  useEffect(() => {
    setProjects([
      { 
        id: 1, 
        title: 'Image To Speech Application', 
        short_description: 'An innovative application built with React Native to assist visually impaired users by converting text from images into speech. Navigate the app using voice commands for a seamless and accessible user experience.', 
        redirect_url: "https://github.com/Drownie/image-to-speech-app", 
        tags: [
          "React Native",
          "OCR",
          "Mobile Development"
        ] 
      }, 
      { 
        id: 2, 
        title: 'Finger Control Ping-Pong Game', 
        short_description: 'A fun and interactive ping-pong game controlled by finger movements detected using OpenCV. This game maps real-world finger coordinates to control the paddle, offering a unique and engaging gaming experience.', 
        redirect_url: "https://github.com/Drownie/Finger-Control-Ping-Pong", 
        tags: [
          "OpenCV",
          "Python",
          "Game Development"
        ] 
      },
      { 
        id: 3, 
        title: 'Web Scraping Portfolio', 
        short_description: 'This is a web scraping portfolio that presents the raw results of data extraction in JSON format. This project highlights the effectiveness of web scraping techniques in gathering structured data from various sources on the web. Ideal for data enthusiasts and developers, this portfolio demonstrates the capability to automate data collection and provides a clear, organized presentation of the extracted information in JSON files.', 
        redirect_url: "https://github.com/Drownie/Web-Scraping-Portfolio", 
        tags: [
          "Selenium",
          "Python",
          "Web Scraping"
        ] 
      }
    ]);
  }, []);

  function renderProjectCard(project: projectSchema) {
    return (
        <div key={project.id} className="relative min-w-[200px] w-[200px] h-[260px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mr-5">
            <div className="flex flex-col p-5 justify-between w-full h-full">
                <Link href={project.redirect_url} target='_blank' className='h-[30%]'>
                    <h5 className="md:text-xl sm:text-base text-sm font-bold tracking-tight text-amber-900 dark:text-white m-0">{project.title}</h5>
                </Link>
                <p className="h-[40%] font-normal text-sm text-gray-700 dark:text-gray-400 overflow-x-hidden overflow-y-scroll">{project.short_description}</p>
                <Link href={project.redirect_url} target='_blank' className="h-[15%] inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-amber-700 rounded-lg hover:bg-amber-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    See Project
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </Link>
            </div>
        </div>
    );
  }

  return (
    <div id="projects" className='py-5'>
        <div className="flex justify-center items-center w-full md:mb-10">
            <h3 className="text-4xl font-sans font-medium text-center text-amber-700 underline">My Projects</h3>
        </div>
        <div className="flex items-center overflow-y-hidden overflow-x-auto min-w-full h-[30rem] px-10 py-5"> 
            {
                projects.map((project: projectSchema) => {
                    return renderProjectCard(project);
                })
            }
            {
              projects.length > 0 &&
              <Link href="https://github.com/Drownie?tab=repositories" target='_blank' className="relative flex flex-col min-w-[120px] w-[120px] h-[260px] justify-center item-center bg-amber-700 text-white hover:bg-amber-900 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 px-2">
                <p className="font-bold text-xl">More Projects</p>
                <div className="flex w-full py-1">
                  <svg className="rtl:rotate-180 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </div>
              </Link>
            }
        </div>
    </div>
  );
};

// md:gap-x-0 sm:gap-x-5 gap-x-5 md:gap-y-5 sm:gap-y-5 gap-y-5 padding

export default Projects;
