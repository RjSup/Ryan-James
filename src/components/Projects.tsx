import { FaGithub } from "react-icons/fa";
import type { ReactNode } from "react";
import styles from "./projects.module.css";

export interface TechItem {
    icon: ReactNode;  
    name: string;  
}

export interface ProjectProps {
    title: string;
    image: string;
    repoLink?: string;
    liveLink?: string;
    tech: TechItem[];
    description: string;
}

export default function Project({
    title,
    image,
    repoLink,
    liveLink,
    tech,
    description,
}: ProjectProps) {
    return (
        <div className={styles["projects-container"]}>

            {/* LEFT IMAGE SECTION */}
            <div className={styles["left-section"]}>
                <div className={styles["image-placeholder"]}>
                    <img src={image} alt={title} className={styles["project-image"]} />
                </div>
            </div>

            {/* RIGHT CONTENT SECTION */}
            <div className={styles["right-section"]}>

                {/* HEADER */}
                <div className={styles["content-header"]}>
                    <h2 className={styles["projects-title"]}>{title}</h2>

                    <div className={styles["header-links"]}>
                        {repoLink && (
                            <a href={repoLink} className={styles["project-link"]}>
                                <FaGithub />
                            </a>
                        )}
                        {liveLink && (
                            <a href={liveLink} className={styles["project-link"]}>
                                <FaGithub />
                            </a>
                        )}
                    </div>
                </div>

                {/* TECH ICONS */}
                <div className={styles["content-icons"]}>
                    {tech.map((item, index) => (
                        <div key={index} className={styles["icon-item"]}>
                            {item.icon}
                            <span>{item.name}</span>
                        </div>
                    ))}
                </div>

                {/* DESCRIPTION */}
                <div className={styles["content-body"]}>
                    <p className={styles["project-description"]}>{description}</p>
                </div>

            </div>
        </div>
    );
}
