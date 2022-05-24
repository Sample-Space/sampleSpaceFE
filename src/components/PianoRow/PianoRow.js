import React from 'react';
import './PianoRow.css'

const PianoRow = ({ name, note, steps, currentStepIndex, setSteps }) => {
  
  let row = (
    <div className='row'>
    {name ? <p>{name}</p> : <p> </p>}
    {name ? steps.map((step, index) => steps[index] && steps[index].includes(note) ? <button onClick={() => toggleNote(note, index)} key={index}>{index}</button> : <button onClick={} >Pog</button>) : steps.map((step, index) => <p key={index}>{index + 1}</p>)}
    </div>
  )


    return (
      <>
      {row}
      </>
    )
}

export default PianoRow;
