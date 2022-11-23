import { useState } from "react";
import { Song, Track, Instrument } from "reactronica";
import PianoRollDisplay from "../PianoRollDisplay/PianoRollDisplay.js";
import "./PianoRoll.css";

const PianoRoll = ({ kit }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const [steps, setSteps] = useState(kit.sequence);
  return (
    <>
      {kit && (
        <section className="piano-roll fade-in">
          <button
            className="play-button"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? " STOP " : " PLAY "}
          </button>

          <PianoRollDisplay
            currentStepIndex={currentStepIndex}
            steps={steps}
            setSteps={setSteps}
            isPlaying={isPlaying}
          />

          <Song isPlaying={isPlaying} bpm={kit.bpm}>
            <Track
              steps={steps}
              subdivision={"16n"}
              onStepPlay={(index) => {
                setCurrentStepIndex(index);
              }}
            >
              <Instrument
                type="sampler"
                samples={{
                  C3: kit.elements.kick.sound_url,
                  "C#3": kit.elements.snare.sound_url,
                  D3: kit.elements.hh_closed.sound_url,
                  "D#3": kit.elements.hh_open.sound_url,
                  E3: kit.elements.melody.sound_url,
                  F3: kit.elements.one_shot_1.sound_url,
                  "F#3": kit.elements.one_shot_2.sound_url,
                  G3: kit.elements.texture.sound_url,
                }}
              />
            </Track>
          </Song>
        </section>
      )}
    </>
  );
};

export default PianoRoll;
