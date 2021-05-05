import React, { useState } from "react";

const Skill = ({ top, left, icon, title, text, show }) => {
    return (
        <div className="skill" style={{ top: `${top}%`, left: `${left}%` }}>
            <i className={`${icon}`} />
            <div className={`hidden ${show && "show"}`}>
                <span className="title">{title}</span>
                <p className="text">{text}</p>
            </div>
        </div>
    );
};

const skillList = [
    {
        top: 8,
        left: 10,
        icon: "fab fa-html5",
        title: "HTML5 + CSS3",
        text:
            "Clean and responsive front-end development, strong preference for minimalist and animation rich website design",
    },
    {
        top: 12,
        left: 65,
        icon: "fab fa-node-js",
        title: "Node.JS + Express",
        text:
            "Back-end development with Node.JS, Express and MongoDB RESTful API's, authentication and authorization, unit testing and much more",
    },
    {
        top: 40,
        left: 13,
        icon: "fab fa-bootstrap",
        title: "Bootstrap",
        text: "Responsive website design with Bootstrap 4",
    },
    {
        top: 27,
        left: 43,
        icon: "fab fa-github",
        title: "Github",
        text: "Github version control knowledge, clean commits, no headaches",
    },
    {
        top: 45,
        left: 70,
        icon: "fab fa-react",
        title: "React + JSX",
        text:
            "Front-end development with React Single page applications, integration with back-end services",
    },
    {
        top: 80,
        left: 11,
        icon: "fas fa-database",
        title: "MongoDB",
        text:
            "NoSQL database management with data validation, password hashing and clean structure",
    },
    {
        top: 65,
        left: 45,
        icon: "fas fa-book-open",
        title: "Quick learner",
        text:
            "Still a beginner in both front-end and back-end, I'm flexible and capable of learning new frameworks/libraries in a short amount of time if needed",
    },
    {
        top: 85,
        left: 66,
        icon: "fab fa-js",
        title: "Javascript ES6",
        text:
            "Object oriented programming and clean, state-of-the-art javascript code",
    },
];

const Skills = () => {
    const [skillsHidden, setSkillsHidden] = useState(skillList.length);
    const [show, setShow] = useState(false);

    const newSkillList = skillList.map((skill) => ({
        ...skill,
        key: skill.title,
    }));

    for (let i = 0; i < skillsHidden; i++) {
        if (i >= newSkillList.length) break;

        newSkillList[i].top = 50;
        newSkillList[i].left = 50;
    }

    const bubble = (330 * skillsHidden) / skillList.length;

    if (skillsHidden === 0 && !show) {
        setTimeout(() => setShow(true), 1000);
    }

    return (
        <div className="skills">
            <div
                className="hover"
                style={{ top: skillsHidden === 0 ? "0px" : "-2.5rem" }}
            >
                HOVER
            </div>
            <div
                className="bubble"
                style={{ width: `${bubble}px`, height: `${bubble}px` }}
                onClick={() => setSkillsHidden(skillsHidden - 1)}
            >
                {skillList.length - skillsHidden < 2 && "CLICK ME!"}
            </div>
            {newSkillList.map((skill) => (
                <Skill {...skill} show={show} />
            ))}
        </div>
    );
};

export default Skills;
