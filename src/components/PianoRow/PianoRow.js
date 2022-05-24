import React from 'react'
import './PianoRow.css'

<<<<<<< HEAD
const PianoRow = ({ name, note, steps, currentStepIndex, setSteps }) => {
=======
const PianoRow = ({ name, note, steps, currentStepIndex, setSteps, isPlaying}) => {

>>>>>>> 159fa2e (Pass isPlaying as props)
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
      <div>
        <button onClick={() => toggleNote(note, index)}
          key={index}
          className={`active piano-button ${currentStepIndex === index && isPlaying ? 'playing' : '' }`}>
        </button>
      </div>
      :
      <div>
        <button
          onClick={() => toggleNote(note, index)}
          key={index}
          className={`piano-button ${currentStepIndex === index && isPlaying  ? 'playing' : '' }`}>
        </button>
      </div>
    })
  }

  let row = (
    <div className='row'>
<<<<<<< HEAD
      {/* {name ? <p>{name}</p> : <p> </p>} */}
      {name
        ? steps.map((step, index) =>
            steps[index] && steps[index].includes(note) ? (
              <button
                onClick={() => toggleNote(note, index)}
                key={index}
                className='active piano-button'
              ></button>
            ) : (
              <button
                onClick={() => toggleNote(note, index)}
                key={index}
                className='piano-button'
              ></button>
            )
          )
        : steps.map((step, index) => <p key={index}>{index + 1}</p>)}
=======
    {name ? <p>{name}</p> : <p>Steps</p>}
    {name ? createButtons() : steps.map((step, index) =><p key={index}>{index + 1}</p>)}
>>>>>>> 19e7b0d (Increase readability of button generator)
    </div>
  )

  return <>{row}</>
}

export default PianoRow
