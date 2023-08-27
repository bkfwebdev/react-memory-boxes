import React, { useState } from "react";

const GameBox = ({ boxNumber }) => {
    const [isBlinking, setIsBlinking] = useState(false);

    const blinkBox = () => {
        setIsBlinking(true);
        setTimeout(() => setIsBlinking(false), 1000);
    };

    const boxStyle = {
        backgroundColor: isBlinking ? "red" : "blue",
    };

    return (
        <div
            className="bluebox"
            id={boxNumber.toString()}
            style={boxStyle}
            onClick={blinkBox}
        >
            {boxNumber}
        </div>
    );
};

export default GameBox;