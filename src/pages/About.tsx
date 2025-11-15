import Project from "../components/Projects";
import Ledgerly from '../../public/example.png';
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import styles from './about.module.css';

export default function About() {
    return (
        <>
            <div className={styles["about-container"]}>
                <h1 className={styles["section-title"]}>Projects</h1>
                <Project
                title="Ledgerly"
                image={Ledgerly}
                repoLink="https://github.com/RjSup/expense-tracker"
                liveLink="https://your-website.com"
                description="Ledgerly is a personal expense where users can sign up and log in to securely manage their finances, adding or removing expenses as needed. The app allows users to set a monthly budget and provides real-time insights into how their spending affects their overall budget by calculating total expenses spent so far. It gives a clear overview of financial habits, helping users stay on track with their goals. This project was built using React and TypeScript, with a PostgreSQL database to store user information and expense data."
                tech={[
                    { icon: <FaReact />, name: "React" },
                    { icon: <SiTypescript />, name: "TypeScript" },
                ]}
                />

                <Project
                title="Ledgerly"
                image={Ledgerly}
                repoLink="https://github.com/RjSup/expense-tracker"
                liveLink="https://your-website.com"
                description="A lightweight expense tracker made with React + TypeScript."
                tech={[
                    { icon: <FaReact />, name: "React" },
                    { icon: <SiTypescript />, name: "TypeScript" },
                ]}
                />

                
            </div>
        </>
    );
};