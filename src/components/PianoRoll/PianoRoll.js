import { useState } from 'react';
import { Song, Track, Instrument } from 'reactronica';


const PianoRoll = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [steps, setSteps] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ])
    return (
      <>
        <h1>PIANO ROLL</h1>
        <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? ' || ' : ' |> '}
        </button>
      </>
    )
}

export default PianoRoll
