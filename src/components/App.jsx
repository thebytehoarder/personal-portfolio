import React, { useState } from "react";
import StageZero from "./stage-specific/StageZero";
import "../scss/App.scss";
import StageOne from "./stage-specific/StageOne";

const App = () => {
    const [stage, setStage] = useState(0);

    switch (stage) {
        case 0:
            return <StageZero setStage={setStage} />;
        case 1:
            return <StageOne setStage={setStage} />;
        default:
            return null;
    }
};

export default App;
