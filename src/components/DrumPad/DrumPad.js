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
      <DrumPadButton setNotes={setNotes} note={'C3'} id={1} imgSrc={thumbSrc} />
      <DrumPadButton setNotes={setNotes} note={'C3'} id={2} imgSrc={thumbSrc} />
      <DrumPadButton setNotes={setNotes} note={'C3'} id={3} imgSrc={thumbSrc} />
      <DrumPadButton setNotes={setNotes} note={'C3'} id={4} imgSrc={thumbSrc} />
      <DrumPadButton setNotes={setNotes} note={'C3'} id={5} imgSrc={thumbSrc} />
      <DrumPadButton setNotes={setNotes} note={'C3'} id={6} imgSrc={thumbSrc} />
      <DrumPadButton setNotes={setNotes} note={'C3'} id={7} imgSrc={thumbSrc} />
      <DrumPadButton setNotes={setNotes} note={'C3'} id={8} imgSrc={thumbSrc} />
      <Song>
        <Track>
          <Instrument
            type='sampler'
            notes={notes}
            samples={{
              C3: kick
            }}
          />
        </Track>
      </Song>
    </div>
  )
}

export default DrumPad
