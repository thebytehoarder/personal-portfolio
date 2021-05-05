import React, { useState } from "react";
import { getBox } from "../utility/getBoxes";
import "../../scss/stage-specific/StageZero.scss";
import {
    textContainer,
    side1,
    side2,
    question,
    getRedContent,
} from "../utility/stageZeroParts";

const StageZero = ({ setStage }) => {
    const [widths, setWidths] = useState(["50%", "0%", "50%"]);
    const [contents, setContents] = useState([
        textContainer,
        null,
        textContainer,
    ]);
    const [transitionSpeed, setTransitionSpeed] = useState(0.1);
    const [effect, setEffect] = useState(0);

    const [canSkip, setCanSkip] = useState(true);

    const effects = [
        () => {
            setCanSkip(false);
            setTransitionSpeed(0.3);
            setWidths(["90%", "0%", "10%"]);
            setTimeout(() => {
                setContents([textContainer, null, null]);
                setTransitionSpeed(0.3);
                setWidths(["10%", "0%", "90%"]);
                setTimeout(() => {
                    setContents([side1, null, null]);
                    setTransitionSpeed(0.3);
                    setWidths(["50% + 5rem", "0%", "50% - 5rem"]);
                    setTimeout(() => {
                        setContents([side1, null, side2]);
                        setTransitionSpeed(0.3);
                        setWidths(["50% - 5rem", "0%", "50% + 5rem"]);
                        setTimeout(() => {
                            setTransitionSpeed(0.3);
                            setWidths(["50%", "0%", "50%"]);
                            setCanSkip(true);
                        }, 300);
                    }, 300);
                }, 300);
            }, 300);
        },
        () => {
            setCanSkip(false);
            setContents([side1, getRedContent("GOOD LOOKING", 4), side2]);
            setTransitionSpeed(0.2);
            setWidths(["20%", "60%", "20%"]);
            setTimeout(() => {
                setContents([null, getRedContent("GOOD LOOKING", 4), null]);
                setTransitionSpeed(0.1);
                setWidths(["50%", "0%", "50%"]);
                setTimeout(() => {
                    setContents([null, getRedContent("FAST", 10), null]);
                    setTransitionSpeed(0.2);
                    setWidths(["20%", "60%", "20%"]);
                    setTimeout(() => {
                        setTransitionSpeed(0.1);
                        setWidths(["50%", "0%", "50%"]);
                        setTimeout(() => {
                            setContents([null, getRedContent("FUN", 18), null]);
                            setTransitionSpeed(0.2);
                            setWidths(["20%", "60%", "20%"]);
                            setTimeout(() => {
                                setTransitionSpeed(0.1);
                                setWidths(["50%", "0%", "50%"]);
                                setCanSkip(true);
                            }, 700);
                        }, 150);
                    }, 700);
                }, 150);
            }, 700);
        },
        () => {
            setCanSkip(false);
            setContents([null, question, null]);
            setTimeout(() => setStage(1), 2500);
        },
    ];

    return (
        <main
            onClick={() => {
                if (canSkip) {
                    effects[effect]();
                    setEffect(effect + 1);
                }
            }}
        >
            {getBox(0, widths, contents[0], transitionSpeed)}
            {getBox(1, widths, contents[1], transitionSpeed)}
            {getBox(2, widths, contents[2], transitionSpeed)}
        </main>
    );
};

export default StageZero;
