import React, { useEffect, useState } from "react";
import "../../scss/stage-specific/StageOne.scss";
import NextStageButton from "./NextStageButton";
import Skills from "./Skills";

const getBox = (
    position,
    widths,
    content,
    transitionSpeed,
    classes,
    additional
) => {
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
            className={`${name} ${classes}`}
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

const StageOne = ({ setStage }) => {
    const [widths, setWidths] = useState([50, 0, 50]);
    const [contents, setContents] = useState([null, null, null]);
    const [classes, setClasses] = useState([null, null, null]);
    const [transitionSpeed, setTransitionSpeed] = useState(0.1);

    useEffect(() => {
        let time = 0;

        time += 100;
        setTimeout(() => {
            setTransitionSpeed(0.2);
            setWidths(["10%", "80%", "10%"]);
            setContents([null, <Skills />, <NextStageButton />]);
        }, time);
    }, [setStage]);

    return (
        <main
            onClick={() => {
                setTransitionSpeed(0.1);
                setWidths(["9%", "84%", "9%"]);

                setTimeout(() => {
                    setTransitionSpeed(0.4);
                    setWidths(["10%", "80%", "10%"]);
                }, 100);
            }}
        >
            {getBox(0, widths, contents[0], transitionSpeed, classes[0])}
            {getBox(1, widths, contents[1], transitionSpeed, classes[1])}
            {getBox(2, widths, contents[2], transitionSpeed, classes[2])}
        </main>
    );
};

export default StageOne;
