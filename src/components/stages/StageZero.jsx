import React, { useState } from "react";
import { getBox } from "../utils/getBoxes";
import {
    textContainer,
    textContainerWidth,
    side1,
    side2,
    question,
    getRedContent,
} from "../utils/stageZeroParts";
import SmartphoneWarning from "../commons/SmartphoneWarning";
import "../../scss/stages/StageZero.scss";

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

    const smartphone = window.innerWidth < 880;

    const effects = [
        () => {
            setCanSkip(false);
            setTransitionSpeed(0.3);
            setWidths([
                `100% - (100% - ${textContainerWidth}px) / 2 + 20px`,
                "0%",
                `(100% - ${textContainerWidth}px) / 2  - 20px`,
            ]);
            setTimeout(() => {
                setContents([textContainer, null, null]);
                setTransitionSpeed(0.3);
                setWidths([
                    `(100% - ${textContainerWidth}px) / 2  - 20px`,
                    "0%",
                    `100% - (100% - ${textContainerWidth}px) / 2 + 20px`,
                ]);
                setTimeout(() => {
                    setContents([side1, null, null]);
                    setTransitionSpeed(0.3);
                    setWidths(["50% + 80px", "0%", "50% - 80px"]);
                    setTimeout(() => {
                        setContents([side1, null, side2]);
                        setTransitionSpeed(0.3);
                        setWidths(["50% - 80px", "0%", "50% + 80px"]);
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
            setContents([side1, getRedContent("BACKEND", 4), side2]);
            setTransitionSpeed(0.2);
            setWidths(["20%", "60%", "20%"]);
            setTimeout(() => {
                setContents([null, getRedContent("BACKEND", 4), null]);
                setTransitionSpeed(0.1);
                setWidths(["50%", "0%", "50%"]);
                setTimeout(() => {
                    setContents([null, getRedContent("FRONTEND", 10), null]);
                    setTransitionSpeed(0.2);
                    setWidths(["20%", "60%", "20%"]);
                    setTimeout(() => {
                        setTransitionSpeed(0.1);
                        setWidths(["50%", "0%", "50%"]);
                        setTimeout(() => {
                            setContents([
                                null,
                                getRedContent("FULL STACK", 16),
                                null,
                            ]);
                            setTransitionSpeed(0.2);
                            setWidths(["20%", "60%", "20%"]);
                            setTimeout(() => {
                                setTransitionSpeed(0.1);
                                setWidths(["50%", "0%", "50%"]);
                                setTimeout(() => {
                                    setContents([null, question, null]);
                                    setTimeout(() => setStage(1), 2500);
                                }, 400);
                            }, 700);
                        }, 150);
                    }, 700);
                }, 150);
            }, 700);
        },
    ];

    return (
        <main
            onClick={() => {
                if (canSkip && !smartphone) {
                    effects[effect]();
                    setEffect(effect + 1);
                }
            }}
        >
            {smartphone ? (
                <SmartphoneWarning />
            ) : (
                [0, 1, 2].map((n) =>
                    getBox(n, widths, contents[n], transitionSpeed)
                )
            )}
        </main>
    );
};

export default StageZero;
