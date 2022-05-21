import './DrumPadButton.css'
import { forwardRef } from 'react'

const DrumPadButton = forwardRef(
  ({ setNotes, note, id, imgSrc, keystroke, setCurrentSample, kit }, ref) => {
    const onClick = async () => {
      setCurrentSample(kit.elements[id])
      await setNotes([{ name: note, duration: 4 }])
      await setNotes(null)
    }

    return (
      <button
        ref={ref}
        className='drum-pad'
        id={id}
        // onMouseDown={() => setNotes([{ name: note, duration: 4 }])}
        // onMouseUp={() => setNotes(null)}
        onClick={onClick}
      >
        <img className='pad-image' src={imgSrc} />
        <p className='keystroke'>{keystroke}</p>
      </button>
    )
  }
)

export default DrumPadButton
