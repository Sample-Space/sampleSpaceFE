import React from 'react'
import { Song, Track, Instrument } from 'reactronica'
import { sampleKit } from '../../sampleKit'
import DrumPadButton from '../DrumPadButton/DrumPadButton'
import './DrumPad.css'

const DrumPad = () => {
  const [notes, setNotes] = React.useState(null)
  return (
    <div className='pad-container'>
      <DrumPadButton
        setNotes={setNotes}
        notes={notes}
        note={'E3'}
        id={'sample-1'}
        imgSrc={sampleKit.kit1[0].img}
      />
      <DrumPadButton
        setNotes={setNotes}
        notes={notes}
        note={'F3'}
        id={'sample-2'}
        imgSrc={sampleKit.kit1[1].img}
      />
      <DrumPadButton
        setNotes={setNotes}
        notes={notes}
        note={'F#3'}
        id={'sample-3'}
        imgSrc={sampleKit.kit1[2].img}
      />
      <DrumPadButton
        setNotes={setNotes}
        notes={notes}
        note={'G3'}
        id={'groove'}
        imgSrc={sampleKit.kit1[3].img}
      />
      <DrumPadButton
        setNotes={setNotes}
        notes={notes}
        note={'C3'}
        id={'kick'}
        imgSrc={sampleKit.kit1[4].img}
      />
      <DrumPadButton
        setNotes={setNotes}
        notes={notes}
        note={'C#3'}
        id={'snare'}
        imgSrc={sampleKit.kit1[5].img}
      />
      <DrumPadButton
        setNotes={setNotes}
        notes={notes}
        note={'D3'}
        id={'hh1'}
        imgSrc={sampleKit.kit1[6].img}
      />
      <DrumPadButton
        setNotes={setNotes}
        notes={notes}
        note={'D#3'}
        id={'hh2'}
        imgSrc={sampleKit.kit1[7].img}
      />
      <Song>
        <Track>
          <Instrument
            type='sampler'
            notes={notes}
            samples={{
              C3: sampleKit.kit1[0].sample,
              'C#3': sampleKit.kit1[1].sample,
              D3: sampleKit.kit1[2].sample,
              'D#3': sampleKit.kit1[3].sample,
              E3: sampleKit.kit1[4].sample,
              F3: sampleKit.kit1[5].sample,
              'F#3': sampleKit.kit1[6].sample,
              G3: sampleKit.kit1[7].sample
            }}
          />
        </Track>
      </Song>
    </div>
  )
}

export default DrumPad
