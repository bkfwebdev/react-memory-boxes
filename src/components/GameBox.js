import react from 'react';
import { useState,createContext } from 'react';
import { useGameBoardContext } from '../context/GameBoardContext';

export const GameBox = ({boxNum}) => {
    const [isBlinking, setIsBlinking] = useState(false);
    const {playerSequence,handlePlayerSequence } = useGameBoardContext();
    const blinkBox = () => {
        setIsBlinking(true);
        setTimeout(() => {
            setIsBlinking(false);
        },500);
    }
    
    const handleClick = (boxNum) => {
        blinkBox();
        handlePlayerSequence(boxNum);
    }

    const boxStyle = {
        backgroundColor: isBlinking ? "red" : "blue",
    };


    return (
        <div style={boxStyle} className="gamebox" onClick={() => handleClick(boxNum)}>
            {boxNum}
        </div>
    )
}
