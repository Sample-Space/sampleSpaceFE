import { Song, Track, Instrument, Effect } from "reactronica";
import "./Play.css";
import logo from "../../assets/images/sample-space-logo.svg";
import DrumPad from "../DrumPad/DrumPad";

const Play = () => {
  return (
    <>
      <header>
        <img src={logo} alt="Sample Space logo" />
      </header>
      <main class="main-container">
        <div className="pad-container">
          <DrumPad />
          <DrumPad />
          <DrumPad />
          <DrumPad />
          <DrumPad />
          <DrumPad />
          <DrumPad />
          <DrumPad />
        </div>
        <section className="info-screen">
          <h2>Info Goes Here</h2>
          <p>basic summary here</p>
          <button>Tell me more!</button>
          <p>Tempo</p>
          <p>120</p>
        </section>
      </main>
    </>
  );
};

export default Play;
