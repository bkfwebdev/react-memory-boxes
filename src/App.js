import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import {useState, useEffect} from 'react';
import Header from './components/Header'
import Infobox from './components/InfoBox';
import GameBoard from './components/GameBoard';
import StatusBox from './components/StatusBox';
import { GameBoardProvider } from './context/GameBoardContext';

function App() {
const [correct, setCorrect] = useState(0);
const [gameLevel, setGameLevel] = useState(1);
const [sequenceLength , setSequenceLength] = useState(3);
const [computerSequence, setComputerSequence] = useState(null);
const [playerSequence, setPlayerSequence] = useState(null);

return (
  <ChakraProvider>
   <div className = "App">  
   <GameBoardProvider>
  <VStack>
   <Header></Header>
   <Infobox></Infobox>
   <GameBoard></GameBoard>
   <StatusBox></StatusBox>
   </VStack>
</GameBoardProvider>
   </div>
  </ChakraProvider>
)
}
export default App
