import React from 'react';
import './PianoRollDisplay.css';
import PianoRow from '../PianoRow/PianoRow.js'

const PianoRollDisplay = ({currentStepIndex, steps }) => {
    return (
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
        </section>
    )
}

export default PianoRollDisplay
