import React from 'react'
import './PianoRollDisplay.css'
import PianoRow from '../PianoRow/PianoRow.js'

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
}

export default PianoRollDisplay
