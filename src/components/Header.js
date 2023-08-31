import React from "react";
import { useGameBoardContext } from "../context/GameBoardContext";

const Header = () => { 
    return (
        <div id="header" class="flex-container">
        <h1>Memory-Boxes</h1>
        <p id="instruction-box">{userPrompt}</p>
        </div>
    )
 }

 export default Header;