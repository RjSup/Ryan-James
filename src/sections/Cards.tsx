import React, { useState } from 'react';
import img from '../assets/pxArt.ico';

type Project = {
  image: string;
  title: string;
  tech: string;
  codeLink: string;
  liveLink: string;
};

export default function Cards() {
  const projects: Project[] = [
    {
      image: img,
      title: 'Machine learning based stock prediction and portfolio recommendation system',
      tech: 'Svelte, JavaScript, Tailwind, Python, YFinance',
      codeLink: 'https://github.com/RjSup/Final_Year_Project',
      liveLink: '',
    },
    {
      image: img,
      title: 'Battleships Game',
      tech: 'Java',
      codeLink: 'https://github.com/RjSup/BattleshipsCoursework',
      liveLink: '',
    },
    {
      image: img,
      title: 'Embedded IoT Project',
      tech: 'C, Adafruit.io, MQTT, ESP32',
      codeLink: 'https://github.com/RjSup/Embedded-Iot',
      liveLink: '',
    },
     {
      image: img,
      title: 'Debating web app',
      tech: 'Flask, Python, JavaScript',
      codeLink: 'https://github.com/RjSup/Embedded-Iot',
      liveLink: '',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const goToPage = (index: number) => {
    if (index < 0) {
      setCurrentIndex(projects.length - 1);
    } else if (index >= projects.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(index);
    }
  };

  const currentProject = projects[currentIndex];

  return (
    <div className="relative w-full h-[72vh] max-w-5xl mx-auto my-10 rounded-xl overflow-hidden shadow-2xl bg-[#DFE0DA">
      <div className="flex flex-row h-full">
        {/* Left: Image */}
        <div
          className="w-1/2 h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${currentProject.image})` }}
        >
          <div className="w-full h-full" />
        </div>

        {/* Right: Info */}
        <div className="w-1/2 flex flex-col items-center justify-center text-white px-8 text-center py-22">
          <h1 className="text-2xl text-black md:text-1xl font-bold mb-3">{currentProject.title}</h1>
          <p className="mb-5 text-black text-md md:text-sm">{currentProject.tech}</p>

          <div className="flex justify-between space-x-4 py-22">
            <a
              href={currentProject.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
            >
              View Code
            </a>
            {currentProject.liveLink && (
              <a
                href={currentProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => goToPage(currentIndex - 1)}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 bg-blue-500 hover:bg-white/50 text-white rounded-full transition"
        aria-label="Previous"
      >
        &#8592;
      </button>
      <button
        onClick={() => goToPage(currentIndex + 1)}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 bg-blue-500 hover:bg-white/50 text-white rounded-full transition"
        aria-label="Next"
      >
        &#8594;
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToPage(idx)}
            className={`w-3 h-3 rounded-full transition ${
              idx === currentIndex ? 'bg-white' : 'bg-gray-500'
            }`}
            aria-label={`Go to project ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
