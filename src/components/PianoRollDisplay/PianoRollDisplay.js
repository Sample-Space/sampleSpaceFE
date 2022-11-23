import React from "react";
import "./PianoRollDisplay.css";
import PianoRow from "../PianoRow/PianoRow.js";

const PianoRollDisplay = ({ currentStepIndex, steps, setSteps, isPlaying }) => {
  return (
    <section className="roll-display">
      <PianoRow
        steps={steps}
      />
      <PianoRow
        name={"S4"}
        note={"F#3"}
        steps={steps}
        setSteps={setSteps}
        currentStepIndex={currentStepIndex}
        isPlaying={isPlaying}
      />
      <PianoRow
        name={"S3"}
        note={"F3"}
        steps={steps}
        setSteps={setSteps}
        currentStepIndex={currentStepIndex}
        isPlaying={isPlaying}
      />

      <PianoRow
        name={"S2"}
        note={"G3"}
        steps={steps}
        setSteps={setSteps}
        currentStepIndex={currentStepIndex}
        isPlaying={isPlaying}
      />
      <PianoRow
        name={"S1"}
        note={"E3"}
        steps={steps}
        setSteps={setSteps}
        currentStepIndex={currentStepIndex}
        isPlaying={isPlaying}
      />
      <PianoRow
        name={"HH2"}
        note={"D#3"}
        steps={steps}
        setSteps={setSteps}
        currentStepIndex={currentStepIndex}
        isPlaying={isPlaying}
      />
      <PianoRow
        name={"HH1"}
        note={"D3"}
        steps={steps}
        setSteps={setSteps}
        currentStepIndex={currentStepIndex}
        isPlaying={isPlaying}
      />
      <PianoRow
        name={"Sn"}
        note={"C#3"}
        steps={steps}
        setSteps={setSteps}
        currentStepIndex={currentStepIndex}
        isPlaying={isPlaying}
      />
      <PianoRow
        name={"K"}
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
