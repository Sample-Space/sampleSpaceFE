<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import './PianoRollDisplay.css';
import PianoRow from '../PianoRow/PianoRow.js'

const PianoRollDisplay = ({currentStepIndex, steps, setSteps }) => {
    return (
        <section className="roll-display" >
          <PianoRow
            currentStepIndex={currentStepIndex}
            steps={steps}
            />
          <PianoRow
            name={'Kick'}
            note={'C3'}
            steps={steps}
            setSteps={setSteps}
            currentStepIndex={currentStepIndex}
             />
          <PianoRow
            name={'Snare'}
            note={'C#3'}
            steps={steps}
            setSteps={setSteps}
            currentStepIndex={currentStepIndex}
            />
          <PianoRow
            name={'High Hat 1'}
            note={'D3'}
            steps={steps}
            setSteps={setSteps}
            currentStepIndex={currentStepIndex}
            />
          <PianoRow
            name={'High Hat 2'}
            note={'D#3'}
            steps={steps}
            setSteps={setSteps}
            currentStepIndex={currentStepIndex}
            />
          <PianoRow
            name={'Melody'}
            note={'E3'}
            steps={steps}
            setSteps={setSteps}
            currentStepIndex={currentStepIndex}
            />
          <PianoRow
            name={'One Shot 1'}
            note={'F3'}
            steps={steps}
            setSteps={setSteps}
            currentStepIndex={currentStepIndex}
            />
          <PianoRow
            name={'One Shot 2'}
            note={'F#3'}
            steps={steps}
            setSteps={setSteps}
            currentStepIndex={currentStepIndex}
            />
          <PianoRow
            name={'Texture'}
            note={'G3'}
            steps={steps}
            setSteps={setSteps}
            currentStepIndex={currentStepIndex}
            />
=======
import React from 'react'
=======
import React from 'react';
import './PianoRollDisplay.css';
import PianoRow from '../PianoRow/PianoRow.js'
>>>>>>> 809dc39 (Create PianoRoll template)

const PianoRollDisplay = ({currentStepIndex, steps }) => {
    return (
<<<<<<< HEAD
        <section>
          <
>>>>>>> 2b6e4fc (Create react export component)
=======
        <section >
          <PianoRow />
          <PianoRow
            name={'Kick'}
            note={'C3'}
            currentStepIndex={currentStepIndex}
             />
          <PianoRow
            name={'Snare'}
            note={'C#3'}
            currentStepIndex={currentStepIndex}
            />
          <PianoRow
            name={'High Hat 1'}
            note={'D3'}
            currentStepIndex={currentStepIndex}
            />
          <PianoRow
            name={'High Hat 2'}
            note={'D#3'}
            currentStepIndex={currentStepIndex}
            />
          <PianoRow
            name={'Melody'}
            note={'E3'}
            currentStepIndex={currentStepIndex}
            />
          <PianoRow
            name={'One Shot 1'}
            note={'F3'}
            currentStepIndex={currentStepIndex}
            />
          <PianoRow
            name={'One Shot 2'}
            note={'F#3'}
            currentStepIndex={currentStepIndex}
            />
          <PianoRow
            name={'Texture'}
            note={'G3'}
            currentStepIndex={currentStepIndex}
            />
>>>>>>> 809dc39 (Create PianoRoll template)
        </section>
    )
}

export default PianoRollDisplay
