import React ,{ createContext,useContext,useState,useEffect } from "react";
const GameBoardContext = createContext("");

export const useGameBoardContext = () => {
    return useContext(GameBoardContext)
};

export const GameBoardProvider = ({children}) => {
    const [computerSequence, setComputerSequence] = useState([]);
    const [playerSequence, setPlayerSequence] = useState([]);
    const [gameLevel, setGameLevel] = useState(1);
    const [sequenceLength, setSequenceLength] = useState(3);
    const [correct, setCorrect] = useState(0);
    const [incorrect, setIncorrect] = useState(0);
    const [userPrompt, setUserPrompt] = useState("The computer will select a random sequence of boxes, you must click the boxes in the same sequence,click start to begin each sequence...");

    const resetGame = () => {
        setComputerSequence([]);
        setPlayerSequence([]);
        setGameLevel(1);
        setSequenceLength(3);
        setCorrect(0);
        setIncorrect(0);
        setUserPrompt("The computer will select a random sequence of boxes, you must click the boxes in the same sequence,click start to begin each sequence...")
    };

    const randomUniqueNum =  (range, outputCount) => {

        let arr = []
        for (let i = 1; i <= range; i++) {
            arr.push(i)
        }
    
        let result = [];
    
        for (let i = 1; i <= outputCount; i++) {
            const random = Math.floor(Math.random() * (range - i));
            result.push(arr[random]);
            arr[random] = arr[range - i];
        }
    
        return result;
    }

    const generateComputerSequence = () => {
        const randomNums = randomUniqueNum(9,sequenceLength);
        setComputerSequence(randomNums);
        setPlayerSequence([]);
        setCorrect(0);
        setIncorrect(0);
        setUserPrompt("Watch the computer sequence, then click the boxes in the same sequence...")
    };

    const checkPlayerSequence = (seq1,seq2) =>{
        return JSON.stringify(seq1) === JSON.stringify(seq2);
    }

    const handlePlayerSequence = (boxNum) => {
        if(playerSequence.length < computerSequence.length){
            setPlayerSequence([...playerSequence,boxNum]);
        }
    };

    const handleGameLevel = (level) => {
        setGameLevel(level);
    };

    const handleSequenceLength = (length) => {
        setSequenceLength(length);
    };

    const handleCorrect = (correct) => {
        setCorrect(correct);
    };

    const handleIncorrect = (incorrect) => {
        setIncorrect(incorrect);
    };
    
    /*
    useEffect(() => {
        if(playerSequence.length === computerSequence.length){
            if(checkPlayerSequence(playerSequence,computerSequence)){
                setCorrect(correct+1);
                setGameLevel(gameLevel+1);
                setSequenceLength(sequenceLength+1);
                setUserPrompt("Correct! Click start to begin the next sequence...")
            }else{
                setIncorrect(incorrect+1);
                setUserPrompt("Incorrect! Click start to try again...")
            }
        }
    }, [playerSequence]);
    */

    const contextValue = {
        computerSequence,
        playerSequence,
        gameLevel,
        sequenceLength,
        correct,
        incorrect,
        userPrompt,
        resetGame,
        generateComputerSequence,
        handlePlayerSequence,
        handleGameLevel,
        handleSequenceLength,
        handleCorrect,
        handleIncorrect,
    };

    return <GameBoardContext.Provider value={contextValue}>{children}</GameBoardContext.Provider>;
}

export default GameBoardContext;