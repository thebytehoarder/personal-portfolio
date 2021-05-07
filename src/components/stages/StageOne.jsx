import React, { useEffect, useMemo, useState } from "react";
import Skills from "../commons/Skills";
import { getBox } from "../utils/getBoxes";
import "../../scss/stages/StageOne.scss";
import StageChangeButton from "../commons/StageChangeButton";

const StageOne = ({ setStage }) => {
    const [widths, setWidths] = useState([50, 0, 50]);
    const [transitionSpeed, setTransitionSpeed] = useState(0.1);
    const contents = useMemo(
        () => [
            null,
            <Skills />,
            <StageChangeButton
                setStage={setStage}
                onClickFunction={() => {
                    setTransitionSpeed(0.2);
                    setWidths(["50%", "0%", "50%"]);
                }}
                targetStage={2}
                rightSide={true}
            />,
        ],
        [setStage]
    );

    useEffect(() => {
        let time = 0;

        time += 100;
        setTimeout(() => {
            setTransitionSpeed(0.2);
            setWidths(["10%", "80%", "10%"]);
        }, time);
    }, [setStage]);

    const onClick = () => {
        setTransitionSpeed(0.1);
        setWidths(["9%", "84%", "9%"]);

        setTimeout(() => {
            setTransitionSpeed(0.4);
            setWidths(["10%", "80%", "10%"]);
        }, 100);
    };

    return (
        <main>
            {getBox(0, widths, contents[0], transitionSpeed)}
            {getBox(
                1,
                widths,
                contents[1],
                transitionSpeed,
                null,
                null,
                onClick
            )}
            {getBox(2, widths, contents[2], transitionSpeed)}
        </main>
    );
};

export default StageOne;
