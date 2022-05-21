import React from 'react'
import { Song, Track, Instrument } from 'reactronica'
import { sampleKit } from '../../sampleKit'
import DrumPadButton from '../DrumPadButton/DrumPadButton'
import './DrumPad.css'

const DrumPad = ({ setCurentSample, kit, allRefs }) => {
  const [notes, setNotes] = React.useState(null)

  const handlePlay = (e) => {
    e.preventDefault()
    const currentSample = null //find the current sample from the array
    // setCurentSample(currentSample)
  }

  return (
    <>
      {kit && (
        <div className='pad-container'>
          <DrumPadButton
            ref={allRefs[0]}
            setNotes={setNotes}
            note={'E3'}
            id={'sample-1'}
            imgSrc={kit.elements.kick.thumbnail_url}
            // imgSrc={sampleKit.kit1[0].img}
            // onClick={handlePlay}
          />
          <DrumPadButton
            ref={allRefs[1]}
            setNotes={setNotes}
            note={'F3'}
            id={'sample-2'}
            // imgSrc={sampleKit.kit1[1].img}
            imgSrc={kit.elements.snare.thumbnail_url}
            // onClick={handlePlay}
          />
          <DrumPadButton
            ref={allRefs[2]}
            setNotes={setNotes}
            note={'F#3'}
            id={'sample-3'}
            // imgSrc={sampleKit.kit1[2].img}
            imgSrc={kit.elements.hh_closed.thumbnail_url}
            // onClick={handlePlay}
          />
          <DrumPadButton
            ref={allRefs[3]}
            setNotes={setNotes}
            note={'G3'}
            id={'groove'}
            // imgSrc={sampleKit.kit1[3].img}
            imgSrc={kit.elements.hh_open.thumbnail_url}
            // onClick={handlePlay}
          />
          <DrumPadButton
            ref={allRefs[6]}
            setNotes={setNotes}
            note={'C3'}
            id={'kick'}
            // imgSrc={sampleKit.kit1[4].img}
            imgSrc={kit.elements.melody.thumbnail_url}
            // onClick={handlePlay}
          />
          <DrumPadButton
            ref={allRefs[4]}
            setNotes={setNotes}
            note={'C#3'}
            id={'snare'}
            // imgSrc={sampleKit.kit1[5].img}
            imgSrc={kit.elements.one_shot_1.thumbnail_url}
            // onClick={handlePlay}
          />
          <DrumPadButton
            ref={allRefs[5]}
            setNotes={setNotes}
            note={'D3'}
            id={'hh1'}
            // imgSrc={sampleKit.kit1[6].img}
            imgSrc={kit.elements.one_shot_2.thumbnail_url}
            // onClick={handlePlay}
          />
          <DrumPadButton
            ref={allRefs[7]}
            setNotes={setNotes}
            note={'D#3'}
            id={'hh2'}
            // imgSrc={sampleKit.kit1[7].img}
            imgSrc={kit.elements.texture.thumbnail_url}
            // onClick={handlePlay}
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
      )}
    </>
  )
}

export default DrumPad
