import React, { useEffect, useState } from "react";

const textContainer = (
    <div className="testContainer">
        <div>TEST 1</div>
        <div>TEST 2</div>
        <div>TEST 3</div>
    </div>
);

const sideText = <span className="sidewaysText">WAIT, THIS IS WORKING??</span>;

const getBox = (position, widths, contents, transitionSpeed, additional) => {
    const width = widths[position];
    let name;
    let content = contents[position] && textContainer;

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
    }

    return (
        <div
            className={name}
            style={{
                width: `${width}%`,
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
    const [contents, setContents] = useState([true, false, true]);
    const [transitionSpeed, setTransitionSpeed] = useState(0.1);
    const [showSide, setShowSide] = useState(false);

    useEffect(() => {
        let time = 0;

        time += 1000;
        setTimeout(() => {
            setTransitionSpeed(0.3);
            setWidths([90, 0, 10]);
        }, time);

        time += 350;
        setTimeout(() => {
            setContents([true, false, false]);
            setShowSide(true);
            setTransitionSpeed(0.3);
            setWidths([10, 0, 90]);
        }, time);

        time += 1000;
        setTimeout(() => {
            setContents([false, false, false]);
            setTransitionSpeed(0.3);
            setWidths([50, 0, 50]);
        }, time);

        time += 350;
        setTimeout(() => {
            setStage(1);
        }, time);
    }, []);

    return (
        <main>
            {getBox(0, widths, contents, transitionSpeed)}
            {getBox(1, widths, contents, transitionSpeed)}
            {getBox(2, widths, contents, transitionSpeed, showSide && sideText)}
        </main>
    );
};

export default StageZero;
