import { Song, Track, Instrument, Effect } from "reactronica";
import logo from "../../assets/images/sample-space-logo.svg";
import DrumPad from "../DrumPad/DrumPad";

const Play = () => {
  return (
    <>
      <header>
        <img src={logo} alt="Sample Space logo" />
      </header>
      <DrumPad />
      <div className="play-container"></div>
    </>
  );
};

export default Play;
