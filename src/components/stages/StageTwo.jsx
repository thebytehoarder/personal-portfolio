import React, { useState } from "react";
import { getBox } from "../utils/getBoxes";
import "../../scss/stages/StageTwo.scss";

const div1 = (
    <div className="lastPageContent1">
        <div className="title">
            <div>E-COMMERCE</div>
            <div>DEMO WEBSITE</div>
            <div>PROJECT</div>
        </div>
        <a
            href="https://davide-halili-ecommerce-demo.herokuapp.com"
            target="_blank"
            rel="noreferrer"
        >
            <div className="shade" />
            <i className="fas fa-play" />
        </a>
    </div>
);

const div2 = (
    <div className="lastPageContent2">
        <div className="contactMe">CONTACT ME!</div>
        <a
            className="circle"
            href="https://github.com/d4ve02"
            target="_blank"
            rel="noreferrer"
        >
            <div className="circleContent" />
            <i className="fab fa-github" />
        </a>
        <a
            className="circle"
            href="https://www.linkedin.com/in/davide-halili-13486520b/"
            target="_blank"
            rel="noreferrer"
        >
            <div className="circleContent" />
            <i className="fab fa-linkedin-in" />
        </a>
        <a className="circle" href="mailto:halilidavide00@gmail.com">
            <div className="circleContent" />
            <i className="fas fa-envelope-open" />
        </a>
    </div>
);

const StageTwo = () => {
    const widths = useState(["50%", 0, "50%"])[0];
    const transitionSpeed = useState(0.2)[0];
    const contents = useState([div1, null, div2])[0];

    return (
        <main>
            {getBox(0, widths, contents[0], transitionSpeed)}
            {getBox(1, widths, contents[1], transitionSpeed)}
            {getBox(2, widths, contents[2], transitionSpeed)}
        </main>
    );
};

export default StageTwo;
