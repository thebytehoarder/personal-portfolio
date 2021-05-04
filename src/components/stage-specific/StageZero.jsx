import React, { useEffect, useState } from "react";

const textContainer = (
    <div className="testContainer">
        <div>TEST 1</div>
        <div>TEST 2</div>
        <div>TEST 3</div>
    </div>
);

const sideText = (
    <span className="sidewaysTextWorking">WAIT, THIS IS WORKING??</span>
);

const side1 = <span className="sidewaysText1">MINIMALIST</span>;
const side2 = <span className="sidewaysText2">WEB DESIGN</span>;

let redText = "GOOD LOOKING";
let fontSize = 4;

const question = (
    <div className="question">
        <div className="content">WHAT ABOUT MY SKILLS?</div>
    </div>
);

const getBox = (position, widths, content, transitionSpeed, additional) => {
    const width = widths[position];
    let name;

    switch (position) {
        case 0:
            name = "leftBox";
            break;
        case 1:
            name = "middleBox";
            break;
        case 2:
            name = "rightBox";
            break;
        default:
            name = "";
            break;
    }

    return (
        <div
            className={name}
            style={{
                width: `calc(${width})`,
                transition: `width ${transitionSpeed}s ease`,
            }}
        >
            {content}
            {additional}
        </div>
    );
};

const StageZero = ({ setStage }) => {
    const [widths, setWidths] = useState([50, 0, 50]);
    const [contents, setContents] = useState([
        textContainer,
        null,
        textContainer,
    ]);
    const [transitionSpeed, setTransitionSpeed] = useState(0.1);

    useEffect(() => {
        let time = 0;

        time += 1000;
        setTimeout(() => {
            setTransitionSpeed(0.3);
            setWidths(["90%", "0%", "10%"]);
        }, time);

        time += 350;
        setTimeout(() => {
            setContents([textContainer, null, sideText]);
            setTransitionSpeed(0.3);
            setWidths(["10%", "0%", "90%"]);
        }, time);

        time += 1000;
        setTimeout(() => {
            setContents([side1, null, null]);
            setTransitionSpeed(0.3);
            setWidths(["50% + 5rem", "0%", "50% - 5rem"]);
        }, time);

        time += 350;
        setTimeout(() => {
            setContents([side1, null, side2]);
            setTransitionSpeed(0.3);
            setWidths(["50% - 5rem", "0%", "50% + 5rem"]);
        }, time);

        time += 350;
        setTimeout(() => {
            setTransitionSpeed(0.3);
            setWidths(["50%", "0%", "50%"]);
        }, time);

        time += 1000;
        setTimeout(() => {
            const redContent = (
                <span
                    className="redText"
                    style={{ fontSize: `${fontSize}rem` }}
                >
                    {redText}
                </span>
            );

            setTransitionSpeed(0.2);
            setWidths(["20%", "60%", "20%"]);
            setContents([side1, redContent, side2]);
        }, time);

        time += 650;
        setTimeout(() => {
            setTransitionSpeed(0.1);
            setWidths(["50%", "0%", "50%"]);
        }, time);

        time += 150;
        setTimeout(() => {
            redText = "FAST";
            fontSize = 10;

            const redContent = (
                <span
                    className="redText"
                    style={{ fontSize: `${fontSize}rem` }}
                >
                    {redText}
                </span>
            );

            setTransitionSpeed(0.2);
            setWidths(["20%", "60%", "20%"]);
            setContents([side1, redContent, side2]);
        }, time);

        time += 650;
        setTimeout(() => {
            setTransitionSpeed(0.1);
            setWidths(["50%", "0%", "50%"]);
        }, time);

        time += 150;
        setTimeout(() => {
            redText = "FUN";
            fontSize = 18;

            const redContent = (
                <span
                    className="redText"
                    style={{ fontSize: `${fontSize}rem` }}
                >
                    {redText}
                </span>
            );

            setTransitionSpeed(0.2);
            setWidths(["20%", "60%", "20%"]);
            setContents([side1, redContent, side2]);
        }, time);

        time += 650;
        setTimeout(() => {
            const redContent = (
                <span
                    className="redText"
                    style={{ fontSize: `${fontSize}rem` }}
                >
                    {redText}
                </span>
            );

            setTransitionSpeed(0.1);
            setWidths(["50%", "0%", "50%"]);
            setContents([null, redContent, null]);
        }, time);

        time += 750;
        setTimeout(() => {
            setContents([null, question, null]);
        }, time);

        time += 2500;
        setTimeout(() => {
            setStage(1);
        }, time);
    }, [setStage]);

    return (
        <main>
            {getBox(0, widths, contents[0], transitionSpeed)}
            {getBox(1, widths, contents[1], transitionSpeed)}
            {getBox(2, widths, contents[2], transitionSpeed)}
        </main>
    );
};

export default StageZero;
