export const getBox = (
    position,
    widths,
    content,
    transitionSpeed,
    classes,
    additional,
    onClick
) => {
    const width = widths[position];
    let name;

    switch (position) {
        case 0:
            name = "leftBox";
            break;
        case 1:
            name = "middleBox";
            break;
        case 2:
            name = "rightBox";
            break;
        default:
            name = "";
            break;
    }

    return (
        <div
            className={`${name} ${classes}`}
            style={{
                width: `calc(${width})`,
                transition: `width ${transitionSpeed}s ease`,
            }}
            onClick={onClick}
        >
            {(position === 0 || position === 2) && (
                <svg width="100%" height="100%">
                    <pattern
                        id={`pattern${position}`}
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                    >
                        <line
                            className={`obliqueLine ${
                                position === 0 ? "primary" : "secondary"
                            }`}
                            x1={0}
                            y1={0}
                            x2={20}
                            y2={20}
                        />
                    </pattern>

                    <rect
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                        fill={`url(#pattern${position})`}
                    ></rect>
                </svg>
            )}

            {content}
            {additional}
        </div>
    );
};
