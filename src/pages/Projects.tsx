import Project from "../components/Projects";
import type { TechItem } from "../components/Projects";
import Ledgerly from '../assets/example.png';
import WealthWise from '../assets/example3.png';
import Conversely from '../assets/example4.png';
import { FaReact } from "react-icons/fa";
import { SiJavascript, SiPython, SiTypescript, SiSvelte, SiFlask } from "react-icons/si";
import styles from './project.module.css';

// data projects expects
interface ProjectData {
    title: string;
    image: string;
    liveLink: string;
    description: string;
    tech: TechItem[];
}

// arr of projects using the data
const projects: ProjectData[] = [
    {
        title: "Ledgerly",
        image: Ledgerly,
        liveLink: "https://github.com/RjSup/expense-tracker",
        description: "Ledgerly is a personal expense tracker where users can sign up and log in to securely manage their finances, adding or removing expenses as needed. The app allows users to set a monthly budget and provides real-time insights into how their spending affects their overall budget by calculating total expenses spent so far. This project was built using React and TypeScript, with a PostgreSQL database to store user information and expense data.",
        tech: [
            { icon: <FaReact />, name: "React", colour: "#58c3db", background: "#c5e9fc" },
            { icon: <SiTypescript />, name: "TypeScript", colour: "#3178C6", background: "#d2e1f7" },
        ]
    },
    {
        title: "WealthWise",
        image: WealthWise,
        liveLink: "https://github.com/RjSup/Final_Year_Project",
        description: "WealthWise is a stock predicting web application that leverages machine learning to help users make informed investment decisions. Built with Svelte, JavaScript and Python.",
        tech: [
            { icon: <SiSvelte />, name: "Svelte", colour: "#FF3E00", background: "#ffd8cc" },
            { icon: <SiJavascript />, name: "JavaScript", colour: "#000000", background: "#F7DF1E" },
            { icon: <SiPython />, name: "Python", colour: "#3776AB", background: "#d6e8f6" },
        ]
    },
    {
        title: "Conversely",
        image: Conversely,
        liveLink: "https://github.com/RjSup/COMP5013-WebApp",
        description: "Conversely is a debating web application designed to facilitate structured debates on various topics. Built using Flask for the backend and JavaScript for the frontend.",
        tech: [
            { icon: <SiJavascript />, name: "JavaScript", colour: "#000000", background: "#F7DF1E" },
            { icon: <SiPython />, name: "Python", colour: "#3776AB", background: "#d6e8f6" },
            { icon: <SiFlask />, name: "Flask", colour: "#000000", background: "#e0e0e0" },
        ]
    },
];

export default function About() {
    return (
        <div className={styles["about-container"]}>
            <h1 className={styles["section-title"]}>Projects</h1>
            {/* loop all data to show all projects */}
            {projects.map((p) => (
                <Project
                    key={p.title}
                    title={p.title}
                    image={p.image}
                    liveLink={p.liveLink}
                    description={p.description}
                    tech={p.tech}
                />
            ))}
        </div>
    );
}
