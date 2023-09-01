import React from "react";
import { useGameBoardContext } from "../context/GameBoardContext";

const InfoBox = () => {

    return (
        <div id="info-box" class="flex-container">
        <p class = "level-box" id="correct">Correct:0</p>
        <button id="restart-game-button"> Restart Game</button>
        <p class="level-box" id="incorrect">Incorrect:0</p>
        </div>
    )
}

export default InfoBox; 


