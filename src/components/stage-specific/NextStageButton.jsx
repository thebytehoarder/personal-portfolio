import React from "react";

const NextStageButton = ({ setStage }) => {
    return (
        <i
            onClick={() => setTimeout(() => setStage(2), 300)}
            className="fas fa-arrow-right nextStageButton"
        />
    );
};

export default NextStageButton;
