import React, { useState } from "react";
import StageZero from "./stage-specific/StageZero";
import "../scss/App.scss";

const App = () => {
    const [stage, setStage] = useState(0);

    switch (stage) {
        case 0:
            return <StageZero setStage={setStage} />;
        default:
            return null;
    }
};

export default App;
