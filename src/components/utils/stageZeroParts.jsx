export const textContainer = (
    <div className="testContainer">
        <div>DΛVIDE</div>
        <div>HΛLILI</div>
        <div>PORTFOLIO</div>
    </div>
);

export const textContainerWidth = 887.05;

export const side1 = <span className="sidewaysText1">FULL STACK</span>;
export const side2 = <span className="sidewaysText2">DEVELOPER</span>;

export const question = (
    <div className="question">
        <div className="content">WHAT ABOUT MY SKILLS?</div>
    </div>
);

export const getRedContent = (redText, fontSize) => (
    <span className="redText" style={{ fontSize: `${fontSize}vw` }}>
        {redText}
    </span>
);
