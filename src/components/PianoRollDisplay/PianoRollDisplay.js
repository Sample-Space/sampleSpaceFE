import React from 'react'
import './PianoRollDisplay.css'
import PianoRow from '../PianoRow/PianoRow.js'

<<<<<<< HEAD
const PianoRollDisplay = ({ currentStepIndex, steps, setSteps }) => {
  return (
    <section className='roll-display'>
      <PianoRow currentStepIndex={currentStepIndex} steps={steps} />
      <PianoRow
        name={'KICK'}
        note={'C3'}
        steps={steps}
        setSteps={setSteps}
        currentStepIndex={currentStepIndex}
      />
      <PianoRow
        name={'SNRE'}
        note={'C#3'}
        steps={steps}
        setSteps={setSteps}
        currentStepIndex={currentStepIndex}
      />
      <PianoRow
        name={'HHCL'}
        note={'D3'}
        steps={steps}
        setSteps={setSteps}
        currentStepIndex={currentStepIndex}
      />
      <PianoRow
        name={'HHOP'}
        note={'D#3'}
        steps={steps}
        setSteps={setSteps}
        currentStepIndex={currentStepIndex}
      />
      <PianoRow
        name={'MELO'}
        note={'E3'}
        steps={steps}
        setSteps={setSteps}
        currentStepIndex={currentStepIndex}
      />
      <PianoRow
        name={'OS-1'}
        note={'F3'}
        steps={steps}
        setSteps={setSteps}
        currentStepIndex={currentStepIndex}
      />
      <PianoRow
        name={'OS-2'}
        note={'F#3'}
        steps={steps}
        setSteps={setSteps}
        currentStepIndex={currentStepIndex}
      />
      <PianoRow
        name={'OS-3'}
        note={'G3'}
        steps={steps}
        setSteps={setSteps}
        currentStepIndex={currentStepIndex}
      />
    </section>
  )
=======
const PianoRollDisplay = ({currentStepIndex, steps, setSteps, isPlaying }) => {
    return (
        <section className="roll-display" >
          <PianoRow
            currentStepIndex={currentStepIndex}
            steps={steps}
            isPlaying={isPlaying}
            />
          <PianoRow
            name={'Kick'}
            note={'C3'}
            steps={steps}
            setSteps={setSteps}
            currentStepIndex={currentStepIndex}
            isPlaying={isPlaying}
             />
          <PianoRow
            name={'Snare'}
            note={'C#3'}
            steps={steps}
            setSteps={setSteps}
            currentStepIndex={currentStepIndex}
            isPlaying={isPlaying}
            />
          <PianoRow
            name={'High Hat 1'}
            note={'D3'}
            steps={steps}
            setSteps={setSteps}
            currentStepIndex={currentStepIndex}
            isPlaying={isPlaying}
            />
          <PianoRow
            name={'High Hat 2'}
            note={'D#3'}
            steps={steps}
            setSteps={setSteps}
            currentStepIndex={currentStepIndex}
            isPlaying={isPlaying}
            />
          <PianoRow
            name={'Melody'}
            note={'E3'}
            steps={steps}
            setSteps={setSteps}
            currentStepIndex={currentStepIndex}
            isPlaying={isPlaying}
            />
          <PianoRow
            name={'One Shot 1'}
            note={'F3'}
            steps={steps}
            setSteps={setSteps}
            currentStepIndex={currentStepIndex}
            isPlaying={isPlaying}
            />
          <PianoRow
            name={'One Shot 2'}
            note={'F#3'}
            steps={steps}
            setSteps={setSteps}
            currentStepIndex={currentStepIndex}
            isPlaying={isPlaying}
            />
          <PianoRow
            name={'Texture'}
            note={'G3'}
            steps={steps}
            setSteps={setSteps}
            currentStepIndex={currentStepIndex}
            isPlaying={isPlaying}
            />
        </section>
    )
>>>>>>> 159fa2e (Pass isPlaying as props)
}

export default PianoRollDisplay
