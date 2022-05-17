import React from 'react'
import { Song, Track, Instrument } from 'reactronica'
import { sampleKit } from '../../sampleKit'
import DrumPadButton from '../DrumPadButton/DrumPadButton'
import './DrumPad.css'

const DrumPad = ( {kit} ) => {
  const [notes, setNotes] = React.useState(null)

  console.log(kit.elements.kick.thumbnail_url)
  return (
    <div className='pad-container'>
      <DrumPadButton
        setNotes={setNotes}
        note={'E3'}
        id={'sample-1'}
        // imgSrc={kit.elements.kick.thumbnail_url}
      />
      <DrumPadButton
        setNotes={setNotes}
        note={'F3'}
        id={'sample-2'}
        // imgSrc={kit.elements.snare.thumbnail_url}
      />
      <DrumPadButton
        setNotes={setNotes}
        note={'F#3'}
        id={'sample-3'}
        // imgSrc={kit.elements.hh_closed.thumbnail_url}
      />
      <DrumPadButton
        setNotes={setNotes}
        note={'G3'}
        id={'groove'}
        // imgSrc={kit.elements.hh_open.thumbnail_url}
      />
      <DrumPadButton
        setNotes={setNotes}
        note={'C3'}
        id={'kick'}
        // imgSrc={kit.elements.melody.thumbnail_url}
      />
      <DrumPadButton
        setNotes={setNotes}
        note={'C#3'}
        id={'snare'}
        // imgSrc={kit.elements.one_shot_1.thumbnail_url}
      />
      <DrumPadButton
        setNotes={setNotes}
        note={'D3'}
        id={'hh1'}
        // imgSrc={kit.elements.one_shot_2.thumbnail_url}
      />
      <DrumPadButton
        setNotes={setNotes}
        note={'D#3'}
        id={'hh2'}
        // imgSrc={kit.elements.texture.thumbnail_url}
      />
      <Song>
        <Track>
          <Instrument
            type='sampler'
            notes={notes}
            samples={{
              // C3: kit.elements.kick.sound_url,
              // 'C#3': kit.kit.elements.snare.sound_url,
              // D3: kit.kit.elements.hh_closed.sound_url,
              // 'D#3': kit.kit.elements.hh_open.sound_url,
              // E3: kit.kit.elements.melody.sound_url,
              // F3: kit.kit.elements.one_shot_1.sound_url,
              // 'F#3': kit.kit.elements.one_shot_2.sound_url,
              // G3: kit.kit.elements.texture.sound_url
            }}
          />
        </Track>
      </Song>
    </div>
  )
}

export default DrumPad
