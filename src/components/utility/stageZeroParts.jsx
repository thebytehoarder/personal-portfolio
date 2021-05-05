export const textContainer = (
    <div className="testContainer">
        <div>TEST 1</div>
        <div>TEST 2</div>
        <div>TEST 3</div>
    </div>
);

export const side1 = <span className="sidewaysText1">MINIMALIST</span>;
export const side2 = <span className="sidewaysText2">WEB DESIGN</span>;

export const question = (
    <div className="question">
        <div className="content">WHAT ABOUT MY SKILLS?</div>
    </div>
);

export const getRedContent = (redText, fontSize) => (
    <span className="redText" style={{ fontSize: `${fontSize}rem` }}>
        {redText}
    </span>
);
