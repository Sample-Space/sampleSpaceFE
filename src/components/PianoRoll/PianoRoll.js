<<<<<<< HEAD
import { useState } from 'react'
import { Song, Track, Instrument } from 'reactronica'
import PianoRollDisplay from '../PianoRollDisplay/PianoRollDisplay.js'
import './PianoRoll.css'
import { sampleKit } from '../../sampleKit.js'

const PianoRoll = ({ kit }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
=======
import { useState } from 'react';
import { Song, Track, Instrument } from 'reactronica';
import PianoRollDisplay from '../PianoRollDisplay/PianoRollDisplay.js';
import './PianoRoll.css';

const PianoRoll = ({ kit }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const [currentStepIndex, setCurrentStepIndex] = useState(0);

>>>>>>> 4b3ff82 (Remove unused lines)
  const [steps, setSteps] = useState([
    ['C3'],
    null,
    null,
    null,
    ['C#3'],
    null,
    null,
    null,
    ['C3'],
    null,
    null,
    null,
    ['C#3'],
    null,
    null,
    null
  ])
  return (
    <>
      {kit && (
        <section className='piano-roll'>
          <button onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? ' || ' : ' |> '}
          </button>

<<<<<<< HEAD
          <PianoRollDisplay
            currentStepIndex={currentStepIndex}
=======
        <PianoRollDisplay
        currentStepIndex={currentStepIndex}
        steps={steps}
        setSteps={setSteps}
        isPlaying={isPlaying}
        />


        <Song isPlaying={isPlaying}
          bpm={180}>
          <Track
>>>>>>> 159fa2e (Pass isPlaying as props)
            steps={steps}
<<<<<<< HEAD
            setSteps={setSteps}
          />

          <Song isPlaying={isPlaying} bpm={180}>
            <Track
              steps={steps}
              onStepPlay={(stepNotes, index) => {
                setCurrentStepIndex(index)
              }}
            >
              <Instrument
                type='sampler'
                samples={{
                  C3: kit.elements.kick.sound_url,
                  'C#3': kit.elements.snare.sound_url,
                  D3: kit.elements.hh_closed.sound_url,
                  'D#3': kit.elements.hh_open.sound_url,
                  E3: kit.elements.melody.sound_url,
                  F3: kit.elements.one_shot_1.sound_url,
                  'F#3': kit.elements.one_shot_2.sound_url,
                  G3: kit.elements.texture.sound_url

                  //  C3: sampleKit.kit1[0].sample,
                  // 'C#3': sampleKit.kit1[1].sample,
                  // D3: sampleKit.kit1[2].sample,
                  // 'D#3': sampleKit.kit1[3].sample,
                  // E3: sampleKit.kit1[4].sample,
                  // F3: sampleKit.kit1[5].sample,
                  // 'F#3': sampleKit.kit1[6].sample,
                  // G3: sampleKit.kit1[7].sample
                }}
              />
            </Track>
          </Song>
        </section>
=======
            onStepPlay={(stepNotes, index) => {
              setCurrentStepIndex(index);
            }}
          >
            <Instrument
            type='sampler'
            samples={{
              C3: kit.elements.kick.sound_url,
              'C#3': kit.elements.snare.sound_url,
              D3: kit.elements.hh_closed.sound_url,
              'D#3': kit.elements.hh_open.sound_url,
              E3: kit.elements.melody.sound_url,
              F3: kit.elements.one_shot_1.sound_url,
              'F#3': kit.elements.one_shot_2.sound_url,
              G3: kit.elements.texture.sound_url
            }}
            />
          </Track>
        </Song>
      </section>
>>>>>>> 4b3ff82 (Remove unused lines)
      )}
    </>
  )
}

export default PianoRoll
