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
        title: "HTML5 + CSS3/SASS",
        text:
            "Responsive front-end development with a strong preference for minimalism and a keen eye to detail. Comfortable with both pure CSS and with CSS pre-processors such as SASS.",
    },
    {
        top: 12,
        left: 65,
        icon: "fab fa-node-js",
        title: "Node.JS + Express",
        text:
            "Back-end development with Node.JS, Express and MongoDB. Good knowledge of RESTful APIs, authentication/authorization, testing, etc.",
    },
    {
        top: 40,
        left: 13,
        icon: "fab fa-bootstrap",
        title: "Bootstrap",
        text: "Responsive website design with Bootstrap 4",
    },
    {
        top: 65,
        left: 45,
        icon: "fab fa-github",
        title: "Git",
        text: "Good knowledge of Git Version Control",
    },
    {
        top: 45,
        left: 70,
        icon: "fab fa-react",
        title: "React + Redux",
        text:
            "Clean website development with React and Redux, with back-end integration, data validation, etc.",
    },
    {
        top: 80,
        left: 11,
        icon: "fas fa-database",
        title: "MongoDB/MySQL",
        text:
            "In-depth NoSQL database management with data validation, password hashing and clean structuring. Limited knowledge of MySQL.",
    },
    {
        top: 27,
        left: 38,
        icon: "fas fa-book-open",
        title: "Quick learner",
        text:
            "My strongest skill by far is being able to learn new languages/libraries/frameworks in a short amount of time on my own. I'm relatively new to web development, but I've been coding for 4 years now.",
    },
    {
        top: 85,
        left: 66,
        icon: "fab fa-js",
        title: "Javascript/Webpack",
        text:
            "In-depth knowledge of the Javascript programming language, API calls, async programming. Good knowledge of Webpack.",
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
                style={{ top: skillsHidden < 1 ? "0px" : "-50px" }}
            >
                HOVER!
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
