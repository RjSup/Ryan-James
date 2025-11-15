import Project from "../components/Projects";
import Ledgerly from '../../public/example.png';
import WealthWise from '../../public/example3.png';
import Conversely from '../../public/example4.png';
import { FaReact } from "react-icons/fa";
import { SiJavascript, SiPython, SiTypescript, SiSvelte, SiFlask } from "react-icons/si";
import styles from './about.module.css';

export default function About() {
    return (
        <>
            <div className={styles["about-container"]}>
                <h1 className={styles["section-title"]}>Projects</h1>
                <Project
                title="Ledgerly"
                image={Ledgerly}
                // repoLink="https://github.com/RjSup/expense-tracker"
                liveLink="https://github.com/RjSup/expense-tracker"
                description="Ledgerly is a personal expense where users can sign up and log in to securely manage their finances, adding or removing expenses as needed. The app allows users to set a monthly budget and provides real-time insights into how their spending affects their overall budget by calculating total expenses spent so far. It gives a clear overview of financial habits, helping users stay on track with their goals. This project was built using React and TypeScript, with a PostgreSQL database to store user information and expense data."
                tech={[
                    { icon: <FaReact />, name: "React" },
                    { icon: <SiTypescript />, name: "TypeScript" },
                ]}
                />

                <Project
                title="WealthWise"
                image={WealthWise}
                // repoLink="https://github.com/RjSup/Final_Year_Project"
                liveLink="https://github.com/RjSup/Final_Year_Project"
                description="WealthWise is a stock predicting web application that leverages machine learning to help users make informed investment decisions. By analyzing historical stock data and market trends, WealthWise provides users with predictions on stock performance, enabling them to strategize their investments effectively. The platform features an intuitive interface where users can search for stocks, view detailed analytics, and receive personalized recommendations. Built with Svelte, JavaScript and Python, WealthWise ensures a seamless user experience while utilizing robust backend technologies to handle data processing and machine learning algorithms."
                tech={[
                    { icon: <SiSvelte />, name: "Svelte" },
                    { icon: <SiJavascript />, name: "JavaScript" },
                    { icon: <SiPython />, name: "Python" },
                ]}
                />

                <Project
                title="Conversely"
                image={Conversely}
                // repoLink="https://github.com/RjSup/COMP5013-WebApp"
                liveLink="https://github.com/RjSup/COMP5013-WebApp"
                description="Conversely is a debating web application designed to facilitate structured debates on various topics. Users can create accounts, join debate rooms, and engage in discussions by presenting arguments and counterarguments. The platform supports real-time interactions, allowing participants to respond to each other's points promptly. Built using Flask for the backend and JavaScript for the frontend, Conversely ensures a smooth and interactive user experience while maintaining robust performance and security."
                tech={[
                    { icon: <SiJavascript />, name: "JavaScript" },
                    { icon: <SiPython />, name: "Python" },
                    { icon: <SiFlask />, name: "Flask" },
                ]}
                />
                
            </div>
        </>
    );
};