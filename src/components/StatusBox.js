import React from 'react';
const StatusBox = ({gameLevel , sequenceLength}) => {
 return (   
<div className="flex-container">
<p id="gameStatus">Game Level:{gameLevel} Sequence Length:{sequenceLength}</p>
</div>
 )

}

export default StatusBox