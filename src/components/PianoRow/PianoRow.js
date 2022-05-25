import React from 'react'
import './PianoRow.css'

const PianoRow = ({ name, note, steps, currentStepIndex, setSteps, isPlaying}) => {

  const toggleNote = (note, i) => {
    let newSteps = [...steps]

    if (!steps[i]) {
      newSteps[i] = [note]
      setSteps(newSteps)
      return
    } else if (steps[i].includes(note)) {
      newSteps[i] = newSteps[i].filter((nt) => nt !== note)
      if (newSteps[i].length === 0) newSteps[i] = null
      setSteps(newSteps)
      return
    } else {
      newSteps[i].push(note)
      setSteps(newSteps)
      return
    }
  }

  const createButtons = () => {
    return steps.map((step, index) => {
      return steps[index] && steps[index].includes(note) ?
      <div key={index+note}>
        <button onClick={() => toggleNote(note, index)}    
          className={`active piano-button ${currentStepIndex === index && isPlaying ? 'playing' : '' }`}>
        </button>
      </div>
      :
      <div key={index+note}>
        <button
          onClick={() => toggleNote(note, index)}
          className={`piano-button ${currentStepIndex === index && isPlaying  ? 'playing' : '' }`}>
        </button>
      </div>
    })
  }

  let row = (
    <div className='row'>
    {name ? <div><p>{name}</p></div> : <div><p>Steps</p></div>}
    {name ? createButtons() : steps.map((step, index) =><p key={index}>{index + 1}</p>)}
    </div>
  )

  return <>{row}</>
}

export default PianoRow
