import React from "react";

const NextStageButton = ({ setStage, setTransitionSpeed, setWidths }) => {
    return (
        <i
            onClick={() => {
                setTransitionSpeed(0.2);
                setWidths(["50%", "0%", "50%"]);

                setTimeout(() => {
                    setStage(2);
                }, 300);
            }}
            className="fas fa-arrow-right nextStageButton"
        />
    );
};

export default NextStageButton;
