import './DrumPadButton.css'

const DrumPadButton = ({ setNotes, note, id, imgSrc, kickRef }) => {
  const onClick = async () => {
    await setNotes([{ name: note, duration: 4 }])
    await setNotes(null)
  }

  return (
    <button
      ref={kickRef}
      className='drum-pad'
      id={id}
      // onMouseDown={() => setNotes([{ name: note, duration: 4 }])}
      // onMouseUp={() => setNotes(null)}
      onClick={onClick}
    >
      <img className='pad-image' src={imgSrc} />
    </button>
  )
}

export default DrumPadButton
