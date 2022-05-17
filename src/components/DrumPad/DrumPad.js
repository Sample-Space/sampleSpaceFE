import React from 'react'
import { Song, Track, Instrument } from 'reactronica'
import kick from '../../assets/samples/kick.mp3'
import DrumPadButton from '../DrumPadButton/DrumPadButton'
import './DrumPad.css'

const thumbSrc =
  'https://images.theconversation.com/files/394/original/See_Explanation._Clicking_on_the_picture_will_download_the_highest_resolution_version_available.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'

const DrumPad = () => {
  const [notes, setNotes] = React.useState(null)
  return (
    <div className='pad-container'>
      <DrumPadButton setNotes={setNotes} note={'E3'} id={"sample-1"} imgSrc={thumbSrc} />
      <DrumPadButton setNotes={setNotes} note={'F3'} id={"sample-2"} imgSrc={thumbSrc} />
      <DrumPadButton setNotes={setNotes} note={'F#3'} id={"sample-3"} imgSrc={thumbSrc} />
      <DrumPadButton setNotes={setNotes} note={'G3'} id={"groove"} imgSrc={thumbSrc} />
      <DrumPadButton setNotes={setNotes} note={'C3'} id={"kick"} imgSrc={thumbSrc} />
      <DrumPadButton setNotes={setNotes} note={'C#3'} id={"snare"} imgSrc={thumbSrc} />
      <DrumPadButton setNotes={setNotes} note={'D3'} id={"hh1"} imgSrc={thumbSrc} />
      <DrumPadButton setNotes={setNotes} note={'D#3'} id={"hh2"} imgSrc={thumbSrc} />
      <Song>
        <Track>
          <Instrument
            type='sampler'
            notes={notes}
            samples={{
              C3: "../../assets/samples/kick_earth_magnetic_drum.mp3",
              'C#3': "../../assets/samples/snare_juno_entering_jupiter_magnetosphere.mp3",
              D3: "../../assets/samples/hat_closed_cassini_saturn_radio_emmisions.mp3",
              'D#3': "../../assets/samples/hat_open_cassini_saturn_radio_emmisions_1.mp3",
              E3: "../../assets/samples/melody_ultra_cold_helium.mp3",
              F3: "../../assets/samples/one_shot_psp_langmuir_waves.mp3",
              'F#3': "../../assets/samples/one_shot_psp_whistler_mode_waves.mp3",
              G3: "../../assets/samples/groove_cassini_shields_up.mp3",
            }}
          />
        </Track>
      </Song>
    </div>
  )
}

export default DrumPad
