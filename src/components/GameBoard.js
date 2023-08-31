import React from 'react';
import { useState,createContext } from 'react';
import { useGameBoardContext } from '../context/GameBoardContext';

import './GameBox';

const GameBoard = () => {
    const gameBoxLabels = ['1','2','3','4','5','6','7','8','9'];
    const {playerSequence,handlePlayerSequence } = useGameBoardContext();
    

    return (
        <div className="gameboard">
            {gameBoxLabels.map((boxNum) => (
                <GameBox key={boxNum} boxNum={boxNum}/>
            ))}
        </div>
    )
}