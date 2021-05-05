import React, { useEffect, useMemo, useState } from "react";
import "../../scss/stage-specific/StageOne.scss";
import NextStageButton from "./NextStageButton";
import Skills from "./Skills";
import { getBox } from "../utility/getBoxes";

const StageOne = ({ setStage }) => {
    const [widths, setWidths] = useState([50, 0, 50]);
    const contents = useMemo(
        () => [null, <Skills />, <NextStageButton setStage={setStage} />],
        [setStage]
    );
    const [transitionSpeed, setTransitionSpeed] = useState(0.1);

    useEffect(() => {
        let time = 0;

        time += 100;
        setTimeout(() => {
            setTransitionSpeed(0.2);
            setWidths(["10%", "80%", "10%"]);
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
            {getBox(0, widths, contents[0], transitionSpeed)}
            {getBox(1, widths, contents[1], transitionSpeed)}
            {getBox(2, widths, contents[2], transitionSpeed)}
        </main>
    );
};

export default StageOne;
