import React from 'react'
import { Song, Track, Instrument } from 'reactronica'
import kick from '../../assets/samples/kick.mp3'
import DrumPadButton from '../DrumPadButton/DrumPadButton'
import './DrumPad.css'

const DrumPad = ({ padId }) => {
  const [notes, setNotes] = React.useState(null)
  return (
    <div className='pad-container'>
      <DrumPadButton setNotes={setNotes} />
      <DrumPadButton setNotes={setNotes} />
      <DrumPadButton setNotes={setNotes} />
      <DrumPadButton setNotes={setNotes} />
      <DrumPadButton setNotes={setNotes} />
      <DrumPadButton setNotes={setNotes} />
      <DrumPadButton setNotes={setNotes} />
      <DrumPadButton setNotes={setNotes} />
      <Song>
        <Track>
          <Instrument
            type='sampler'
            notes={notes}
            samples={{
              C3: kick
            }}
            onLoad={(buffers) => {
              console.log('Were all loaded')
            }}
          />
        </Track>
      </Song>
    </div>
  )
}

export default DrumPad
