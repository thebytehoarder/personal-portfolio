import React, { useState } from "react";
import StageZero from "./stages/StageZero";
import StageOne from "./stages/StageOne";
import "../scss/App.scss";
import StageTwo from "./stages/StageTwo";

const App = () => {
    const [stage, setStage] = useState(0);

    switch (stage) {
        case 0:
            return <StageZero setStage={setStage} />;
        case 1:
            return <StageOne setStage={setStage} />;
        case 2:
            return <StageTwo setStage={setStage} />;
        default:
            return <StageZero setStage={setStage} />;
    }
};

export default App;
