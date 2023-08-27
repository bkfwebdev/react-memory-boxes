import React from 'react';
const InfoBox = () => {

return (
<div id="info-box" className="flex-container">
<p className = "level-box" id="correct">Correct:0</p>
<button id="restart-game-button"> Restart Game</button>
<p className="level-box" id="incorrect">Incorrect:0</p>
</div>
)

}

export default InfoBox


