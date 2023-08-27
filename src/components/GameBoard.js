import React from "react";
import GameBox from './GameBox';

const GameBoard = () => {
    const rows = 3;
    const columns = 3;
    let boxes = [];

    for (let row = 0; row < rows; row++) {
        let rowBoxes = [];
        for (let col = 0; col < columns; col++) {
            const boxNumber = row * columns + col;
            rowBoxes.push(<GameBox key={boxNumber} boxNumber={boxNumber} />);
        }
        boxes.push(<div key={row} className="row">{rowBoxes}</div>);
    }

    return (
        <div className="gameboard">
            {boxes}
        </div>
    );
}

export default GameBoard;

