import React, { useEffect, useState } from "react";

const open = {
    width: "40px",
    height: "40px",
    transitionDuration: "0.7s",
};

const hidden = {
    width: "0px",
    height: "0px",
    transitionDuration: "0.15s",
};

const right = {
    right: "55px",
    transform: "translateX(+50%) translateY(+50%)",
};

const left = {
    left: "55px",
    transform: "translateX(-50%) translateY(+50%)",
};

const StageChangeButton = ({
    setStage,
    onClickFunction,
    targetStage,
    rightSide,
}) => {
    const [hide, setHide] = useState(true);

    useEffect(() => {
        setHide(false);
    }, []);

    return (
        <i
            onClick={() => {
                setHide(true);
                onClickFunction();

                setTimeout(() => {
                    setStage(targetStage);
                }, 300);
            }}
            style={{ ...(hide ? hidden : open), ...(rightSide ? right : left) }}
            className={`fas fa-arrow-${
                rightSide ? "right" : "left"
            } nextStageButton`}
        />
    );
};

export default StageChangeButton;
