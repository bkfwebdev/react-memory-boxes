import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import {useState, useEffect} from 'react';
import Header from './components/Header'
import Infobox from './components/InfoBox';
import GameBoard from './components/GameBoard';
import StartSequence from './components/StartSequence'
import StatusBox from './components/StatusBox';


function App() {
const [correct, setCorrect] = useState(0);
const [gameLevel, setGameLevel] = useState(1);
const [sequenceLength , setSequenceLength] = useState(3);
const [computerSequence, setComputerSequence] = useState(null);
const [playerSequence, setPlayerSequence] = useState(null);

const randomUniqueNum = (range, outputCount) => {

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

const gameReset = () => {}

return (
  <ChakraProvider>
   <div className = "App">  
  <VStack>
   <Header></Header>
   <Infobox></Infobox>
   <GameBoard></GameBoard>
   <StartSequence></StartSequence>
   <StatusBox></StatusBox>
   </VStack>
   </div>
  </ChakraProvider>
)

}

  

export default App
