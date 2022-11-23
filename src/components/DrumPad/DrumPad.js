import {useState} from "react";
import { Song, Track, Instrument } from "reactronica";
import DrumPadButton from "../DrumPadButton/DrumPadButton";
import "./DrumPad.css";

const DrumPad = ({ setCurrentSample, kit, allRefs, keystrokes }) => {
  const [notes, setNotes] = useState(null);

  return (
    <>
      {kit && (
        <div className="pad-container fade-in">
          <DrumPadButton
            ref={allRefs[4]}
            setNotes={setNotes}
            note={"E3"}
            id={"melody"}
            imgSrc={kit.elements.melody.thumbnail_url}
            keystroke={keystrokes[0]}
            setCurrentSample={setCurrentSample}
            kit={kit}
          />
          <DrumPadButton
            ref={allRefs[5]}
            setNotes={setNotes}
            note={"F3"}
            id={"texture"}
            imgSrc={kit.elements.texture.thumbnail_url}
            keystroke={keystrokes[1]}
            setCurrentSample={setCurrentSample}
            kit={kit}
          />
          <DrumPadButton
            ref={allRefs[6]}
            setNotes={setNotes}
            note={"F#3"}
            id={"one_shot_1"}
            imgSrc={kit.elements.one_shot_1.thumbnail_url}
            keystroke={keystrokes[2]}
            setCurrentSample={setCurrentSample}
            kit={kit}
          />
          <DrumPadButton
            ref={allRefs[7]}
            setNotes={setNotes}
            note={"G3"}
            id={"one_shot_2"}
            imgSrc={kit.elements.one_shot_2.thumbnail_url}
            keystroke={keystrokes[3]}
            setCurrentSample={setCurrentSample}
            kit={kit}
          />
          <DrumPadButton
            ref={allRefs[0]}
            setNotes={setNotes}
            note={"C3"}
            id={"kick"}
            imgSrc={kit.elements.kick.thumbnail_url}
            keystroke={keystrokes[4]}
            setCurrentSample={setCurrentSample}
            kit={kit}
          />
          <DrumPadButton
            ref={allRefs[1]}
            setNotes={setNotes}
            note={"C#3"}
            id={"snare"}
            imgSrc={kit.elements.snare.thumbnail_url}
            keystroke={keystrokes[5]}
            setCurrentSample={setCurrentSample}
            kit={kit}
          />
          <DrumPadButton
            ref={allRefs[2]}
            setNotes={setNotes}
            note={"D3"}
            id={"hh_closed"}
            imgSrc={kit.elements.hh_closed.thumbnail_url}
            keystroke={keystrokes[6]}
            setCurrentSample={setCurrentSample}
            kit={kit}
          />
          <DrumPadButton
            ref={allRefs[3]}
            setNotes={setNotes}
            note={"D#3"}
            id={"hh_open"}
            imgSrc={kit.elements.hh_open.thumbnail_url}
            keystroke={keystrokes[7]}
            setCurrentSample={setCurrentSample}
            kit={kit}
          />
          <Song>
            <Track>
              <Instrument
                type="sampler"
                notes={notes}
                samples={{
                  C3: kit.elements.kick.sound_url,
                  "C#3": kit.elements.snare.sound_url,
                  D3: kit.elements.hh_closed.sound_url,
                  "D#3": kit.elements.hh_open.sound_url,
                  E3: kit.elements.melody.sound_url,
                  F3: kit.elements.texture.sound_url,
                  "F#3": kit.elements.one_shot_1.sound_url,
                  G3: kit.elements.one_shot_2.sound_url,
                }}
              />
            </Track>
          </Song>
        </div>
      )}
    </>
  );
};

export default DrumPad;
