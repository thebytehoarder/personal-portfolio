import React from "react";
import { getBox } from "../utils/getBoxes";

const SmartphoneWarning = () => {
    return getBox(
        0,
        "100%",
        <div className="smartphoneWarning">
            <i className="fas fa-mobile-alt smartphoneImage" />

            <p>LOOKS LIKE YOU'RE USING A SMARTPHONE</p>
            <p>PLEASE USE A BIGGER DEVICE :)</p>
        </div>,
        0.2,
        "smartphone"
    );
};

export default SmartphoneWarning;
