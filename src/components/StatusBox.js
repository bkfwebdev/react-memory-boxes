import React from 'react';
import { useState,createContext } from 'react';
import { useGameBoardContext } from '../context/GameBoardContext';

const StatusBox = () => {

    return (
    <div>
        <div class="flex-container"><button id="StartButton">Start Memory Sequence</button></div>
        <div class="flex-container">
            <p id="gameStatus">Game Level:1 Sequence Length:3</p>
        </div>
    </div>
    )
}