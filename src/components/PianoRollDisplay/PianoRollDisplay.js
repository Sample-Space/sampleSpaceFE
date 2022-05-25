import React from "react";
import "./PianoRollDisplay.css";
import PianoRow from "../PianoRow/PianoRow.js";

const PianoRollDisplay = ({ currentStepIndex, steps, setSteps, isPlaying }) => {
  return (
    <section className="roll-display">
      <PianoRow
        currentStepIndex={currentStepIndex}
        steps={steps}
        isPlaying={isPlaying}
      />
      <PianoRow
        name={"One Shot 2"}
        note={"F#3"}
        steps={steps}
        setSteps={setSteps}
        currentStepIndex={currentStepIndex}
        isPlaying={isPlaying}
      />
      <PianoRow
        name={"One Shot 1"}
        note={"F3"}
        steps={steps}
        setSteps={setSteps}
        currentStepIndex={currentStepIndex}
        isPlaying={isPlaying}
      />

      <PianoRow
        name={"Texture"}
        note={"G3"}
        steps={steps}
        setSteps={setSteps}
        currentStepIndex={currentStepIndex}
        isPlaying={isPlaying}
      />
      <PianoRow
        name={"Melody"}
        note={"E3"}
        steps={steps}
        setSteps={setSteps}
        currentStepIndex={currentStepIndex}
        isPlaying={isPlaying}
      />
      <PianoRow
        name={"High Hat 2"}
        note={"D#3"}
        steps={steps}
        setSteps={setSteps}
        currentStepIndex={currentStepIndex}
        isPlaying={isPlaying}
      />
      <PianoRow
        name={"High Hat 1"}
        note={"D3"}
        steps={steps}
        setSteps={setSteps}
        currentStepIndex={currentStepIndex}
        isPlaying={isPlaying}
      />
      <PianoRow
        name={"Snare"}
        note={"C#3"}
        steps={steps}
        setSteps={setSteps}
        currentStepIndex={currentStepIndex}
        isPlaying={isPlaying}
      />
      <PianoRow
        name={"Kick"}
        note={"C3"}
        steps={steps}
        setSteps={setSteps}
        currentStepIndex={currentStepIndex}
        isPlaying={isPlaying}
      />
    </section>
  );
};

export default PianoRollDisplay;
