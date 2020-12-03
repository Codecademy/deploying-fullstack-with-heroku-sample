import React from 'react'

const ActivityDisplay = ({ name }) => {
  let fontColors = ['#e6194B', '#3cb44b', '#4363d8', '#f58231', '#911eb4', '#42d4f4', '#f032e6', '#bfef45', '#fabed4', '#469990', '#dcbeff', '#9A6324', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#a9a9a9'];
  
  let randColor = fontColors[Math.floor(Math.random() * fontColors.length)];
  return (
    <h1 id="question">Do you want to <span id='suggestedActivity' style={{color: `${randColor}`}}>{ name }</span> today?</h1>
  )
}

export default ActivityDisplay